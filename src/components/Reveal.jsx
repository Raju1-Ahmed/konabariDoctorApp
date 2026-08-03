import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

function Reveal({ children, className = '', delay = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
