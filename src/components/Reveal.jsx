import useInViewOnce from '../hooks/useInViewOnce.js'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

function Reveal({ children, className = '', delay = 0 }) {
  const [elementRef, isVisible] = useInViewOnce('220px')
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className}`}
      style={
        prefersReducedMotion
          ? undefined
          : {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(34px)',
              transitionDelay: isVisible ? `${delay}ms` : '0ms',
            }
      }
    >
      {children}
    </div>
  )
}

export default Reveal
