import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { statistics } from '../data/siteData.js'

function AnimatedNumber({ value, active, reduceMotion }) {
  const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!active) return undefined
    if (reduceMotion) {
      setDisplayValue(value)
      return undefined
    }

    const duration = 2200
    const startTime = performance.now()
    let animationFrameId = 0

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - (1 - progress) ** 3
      setDisplayValue(Math.round(value * easeOut))

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(tick)
      }
    }

    animationFrameId = window.requestAnimationFrame(tick)

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [active, reduceMotion, value])

  const formattedValue = useMemo(() => new Intl.NumberFormat('en-US').format(displayValue), [displayValue])

  return <>{formattedValue}</>
}

function CounterCard({ statistic, index, reduceMotion }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <motion.div
      className="rounded-3xl bg-white/10 p-8 text-center ring-1 ring-white/15 backdrop-blur"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.4 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <strong className="font-poppins text-5xl font-black">
        <AnimatedNumber active={isVisible} reduceMotion={reduceMotion} value={statistic.value} />
        {statistic.suffix}
      </strong>
      <span className="mt-3 block font-bold text-teal-50">{statistic.label}</span>
    </motion.div>
  )
}

function Counter() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-white">
      <div className="absolute -left-20 top-8 size-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-8 size-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="section-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((statistic, index) => (
          <CounterCard index={index} key={statistic.label} reduceMotion={prefersReducedMotion} statistic={statistic} />
        ))}
      </div>
    </section>
  )
}

export default Counter
