import { useEffect, useRef, useState } from 'react'

function useInViewOnce(rootMargin = '200px') {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element || isVisible) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible, rootMargin])

  return [elementRef, isVisible]
}

export default useInViewOnce
