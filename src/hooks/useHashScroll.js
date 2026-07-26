import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetElement = document.querySelector(location.hash)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, location.hash])
}

export default useHashScroll
