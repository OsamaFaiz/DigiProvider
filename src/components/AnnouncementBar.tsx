import { useState, useEffect, useRef, useCallback } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Tag,
} from "lucide-react"
import {
  announcements as defaultAnnouncements,
  getActiveAnnouncements,
  ANNOUNCEMENT_ROTATION_INTERVAL_MS,
  type AnnouncementItem,
} from "../announcementsData"
import { Link } from "./Chrome"

export interface AnnouncementBarProps {
  customAnnouncements?: AnnouncementItem[]
  rotationInterval?: number
  autoRotate?: boolean
}

export function AnnouncementBar({
  customAnnouncements,
  rotationInterval = ANNOUNCEMENT_ROTATION_INTERVAL_MS,
  autoRotate = true,
}: AnnouncementBarProps) {
  const activeItems = getActiveAnnouncements(
    customAnnouncements || defaultAnnouncements,
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const timerRef = useRef<number | null>(null)

  // Listen to prefers-reduced-motion media query
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const count = activeItems.length

  const changeSlide = useCallback(
    (nextIdx: number) => {
      if (count <= 1) return
      if (prefersReducedMotion) {
        setCurrentIndex(nextIdx)
        return
      }
      setIsFading(true)
      const timeout = window.setTimeout(() => {
        setCurrentIndex(nextIdx)
        setIsFading(false)
      }, 180)
      return () => clearTimeout(timeout)
    },
    [count, prefersReducedMotion],
  )

  const handlePrev = useCallback(() => {
    const next = (currentIndex - 1 + count) % count
    changeSlide(next)
  }, [currentIndex, count, changeSlide])

  const handleNext = useCallback(() => {
    const next = (currentIndex + 1) % count
    changeSlide(next)
  }, [currentIndex, count, changeSlide])

  // Automatic rotation timer
  useEffect(() => {
    if (!autoRotate || count <= 1 || isPaused || prefersReducedMotion) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      return
    }

    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count)
    }, rotationInterval)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [autoRotate, count, isPaused, prefersReducedMotion, rotationInterval])

  // If no active announcements exist, render nothing
  if (count === 0) return null

  const current = activeItems[currentIndex] || activeItems[0]

  return (
    <div
      role="region"
      aria-label="Row 1 — Special announcements and offers"
      className="relative z-20 w-full m-0 p-0 border-0 shadow-none overflow-hidden bg-gradient-to-r from-deep-violet via-violet to-purple text-white shrink-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* 
        Position & Dimensions:
        - Position: Top Row of header, above main navbar
        - Width: 100vw edge-to-edge (w-full, no horizontal margins)
        - Desktop height: exactly 60px (md:h-[60px] md:min-h-[60px] md:max-h-[60px])
        - Tablet/Mobile: flexible compact padding (min-h-[44px] py-1 px-3 md:py-0 md:px-6)
      */}
      <div className="mx-auto flex w-full items-center justify-between px-3 min-h-[44px] py-1 md:h-[60px] md:min-h-[60px] md:max-h-[60px] md:py-0 md:px-6">
        {/* Left Side: Previous Arrow (balanced fixed width on desktop for perfect center alignment) */}
        <div className="flex w-8 shrink-0 items-center justify-start md:w-28">
          {count > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous announcement"
              className="grid size-7 place-items-center rounded-full bg-white/10 text-white/90 transition hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-cta active:scale-95"
            >
              <ChevronLeft className="size-4" />
            </button>
          )}
        </div>

        {/* Center: Centered Message, Badge, Highlight and CTA */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className={`flex flex-1 flex-wrap items-center justify-center gap-2 text-center transition-opacity duration-200 md:flex-nowrap md:gap-3.5 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Badge */}
          {current.badge && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-cta px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-ink shadow-sm md:text-xs">
              <Sparkles className="size-3 fill-ink text-ink" />
              {current.badge}
            </span>
          )}

          {/* Text Message with Yellow Highlight */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold leading-tight text-white md:text-sm">
            <span>{current.message}</span>
            {current.highlightText && (
              <span className="font-extrabold text-cta underline decoration-cta/50 underline-offset-2">
                {current.highlightText}
              </span>
            )}
            {current.suffixText && (
              <span className="hidden text-white/85 sm:inline">
                {current.suffixText}
              </span>
            )}
          </div>

          {/* Call to Action Button */}
          {current.ctaLabel && (
            <div className="shrink-0">
              {current.ctaUrl ? (
                <a
                  href={current.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cta px-3.5 py-1 text-xs font-bold text-ink shadow-[0_4px_12px_-2px_rgba(255,216,61,0.5)] transition hover:brightness-105 active:scale-95 md:px-3.5 md:py-1"
                >
                  {current.ctaLabel} <ArrowRight className="size-3" />
                </a>
              ) : (
                <Link
                  to={current.ctaRoute || "quote"}
                  className="inline-flex items-center gap-1.5 rounded-full bg-cta px-3.5 py-1 text-xs font-bold text-ink shadow-[0_4px_12px_-2px_rgba(255,216,61,0.5)] transition hover:brightness-105 active:scale-95 md:px-3.5 md:py-1"
                >
                  {current.ctaLabel} <ArrowRight className="size-3" />
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Next Arrow + Counter (matches left fixed width for symmetric centering) */}
        <div className="flex w-8 shrink-0 items-center justify-end gap-2 md:w-28">
          {count > 1 && (
            <>
              <span className="hidden text-[11px] font-bold text-white/70 lg:inline-block">
                {currentIndex + 1} / {count}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next announcement"
                className="grid size-7 place-items-center rounded-full bg-white/10 text-white/90 transition hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-cta active:scale-95"
              >
                <ChevronRight className="size-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default AnnouncementBar
