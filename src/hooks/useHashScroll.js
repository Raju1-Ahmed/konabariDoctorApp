import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const behavior = prefersReducedMotion ? 'auto' : 'smooth'

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior })
      return undefined
    }

    let attempts = 0
    let animationFrameId = 0

    const tryScroll = () => {
      const targetElement = document.querySelector(location.hash)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior, block: 'start' })
        return
      }

      attempts += 1
      if (attempts < 10) {
        animationFrameId = window.requestAnimationFrame(tryScroll)
      }
    }

    animationFrameId = window.requestAnimationFrame(tryScroll)

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [location.pathname, location.hash])
}

export default useHashScroll
