import { FaPhoneAlt } from 'react-icons/fa'
import { contactInfo } from '../data/siteData.js'

function Emergency() {
  return (
    <section className="section-container py-10" id="emergency">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary to-secondary p-8 text-white shadow-2xl shadow-teal-900/20 md:p-12">
        <div className="absolute -right-14 -top-16 size-52 rounded-full bg-white/10" />
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-teal-100">Emergency Banner</p>
            <h2 className="mt-3 font-poppins text-3xl font-black md:text-5xl">Need Emergency Care?</h2>
            <p className="mt-3 text-xl font-bold text-teal-50">{contactInfo.emergency}</p>
          </div>
          <a
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-black text-white shadow-xl shadow-orange-900/20"
            href={`tel:${contactInfo.emergency}`}
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Emergency
