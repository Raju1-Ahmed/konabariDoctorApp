import { useEffect, useRef, useState } from 'react'

function LazySection({ children, className = '', minHeight = '24rem', rootMargin = '500px' }) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

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

  return (
    <div ref={elementRef} className={className} style={{ containIntrinsicSize: minHeight }}>
      {isVisible ? children : <div aria-hidden="true" style={{ minHeight }} />}
    </div>
  )
}

export default LazySection
