import { motion } from 'framer-motion'
import { FaCheckCircle, FaHospitalAlt, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import hospitalBuilding from '../assets/hospital-building.svg'
import { contactInfo, heroFeatures } from '../data/siteData.js'

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-orange-50 py-16 md:py-24"
      id="home"
    >
      <div className="absolute left-8 top-20 size-64 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-10 right-8 size-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-primary shadow-sm">
            Trusted Healthcare For Your Family
          </p>
          <h1 className="font-poppins text-5xl font-black leading-[0.98] tracking-tight text-dark md:text-7xl">
            Konabari Lab Aid Hospital
          </h1>
          <p className="mt-6 max-w-2xl font-hind text-xl leading-9 text-slate-600">
            আধুনিক চিকিৎসা সেবা, অভিজ্ঞ ডাক্তার, জরুরি সহায়তা এবং সহজ online appointment—সবকিছু এক official website-এ।
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {heroFeatures.map((feature) => (
              <div className="flex items-center gap-3 font-bold text-slate-700" key={feature}>
                <FaCheckCircle className="text-secondary" />
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              className="rounded-full bg-primary px-7 py-4 font-black text-white shadow-2xl shadow-teal-700/20 transition hover:-translate-y-1"
              to="/appointment"
            >
              Book Appointment
            </Link>
            <a
              className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-7 py-4 font-black text-accent shadow-xl shadow-orange-500/10 transition hover:-translate-y-1"
              href={`tel:${contactInfo.emergency}`}
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.65 }}
        >
          <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-dark">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={hospitalBuilding}
                alt="Konabari Lab Aid Hospital building"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/78 via-slate-950/42 to-primary/46" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black backdrop-blur">
                  <FaHospitalAlt />
                  Hospital Building
                </div>
                <h2 className="font-poppins text-3xl font-black leading-tight md:text-4xl">
                  Professional hospital presence starts here
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/82">
                  নিজস্ব ভবন, জরুরি সেবা ও আধুনিক ল্যাব সুবিধা—সবকিছু রোগীরা এক নজরে দেখতে পারবে।
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 rounded-3xl bg-white p-5 shadow-2xl shadow-teal-900/10">
            <p className="text-sm font-black uppercase tracking-wider text-slate-500">Emergency Care</p>
            <strong className="font-poppins text-3xl text-primary">24/7</strong>
          </div>
          <div className="absolute -right-4 top-8 rounded-3xl bg-accent p-5 text-white shadow-2xl shadow-orange-500/20">
            <p className="text-sm font-bold">Modern Lab</p>
            <strong className="font-poppins text-2xl">Digital</strong>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
