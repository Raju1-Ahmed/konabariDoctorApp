import { motion } from 'framer-motion'
import CountUpModule from 'react-countup'
import { statistics } from '../data/siteData.js'

const CountUp = CountUpModule.default

function Counter() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-white">
      <div className="absolute -left-20 top-8 size-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-8 size-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="section-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((statistic, index) => (
          <motion.div
            className="rounded-3xl bg-white/10 p-8 text-center ring-1 ring-white/15 backdrop-blur"
            initial={{ opacity: 0, y: 28 }}
            key={statistic.label}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <strong className="font-poppins text-5xl font-black">
              <CountUp end={statistic.value} duration={2.4} enableScrollSpy scrollSpyOnce />
              {statistic.suffix}
            </strong>
            <span className="mt-3 block font-bold text-teal-50">{statistic.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Counter
