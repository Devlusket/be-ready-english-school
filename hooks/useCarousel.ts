import { useState, useEffect, useCallback } from "react"

export function useCarousel(total: number, slidesPerView = 3, autoplayMs = 3500) {
  const [current, setCurrent] = useState(0)
  const maxIndex = total - slidesPerView

  const goTo = useCallback((idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, maxIndex)))
  }, [maxIndex])

  const next = useCallback(() => {
    setCurrent(prev => prev >= maxIndex ? 0 : prev + 1)
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrent(prev => prev <= 0 ? maxIndex : prev - 1)
  }, [maxIndex])

  useEffect(() => {
    const timer = setInterval(next, autoplayMs)
    return () => clearInterval(timer)
  }, [next, autoplayMs])

  const offset = (100 / slidesPerView) * current

  return { current, goTo, next, prev, offset }
}