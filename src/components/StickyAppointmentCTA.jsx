import { FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/siteData.js'

function StickyAppointmentCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-5 md:bottom-5">
      <div className="flex items-center justify-between gap-3 rounded-full border border-white/70 bg-white/95 p-2 shadow-2xl shadow-slate-900/20 backdrop-blur-xl">
        <a
          className="hidden items-center gap-2 rounded-full px-4 py-3 text-sm font-black text-primary transition hover:bg-teal-50 sm:inline-flex"
          href={`tel:${contactInfo.emergency}`}
        >
          <FaPhoneAlt />
          {contactInfo.emergency}
        </a>
        <Link
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600 md:flex-none"
          to="/appointment"
        >
          <FaCalendarCheck />
          Book Appointment
        </Link>
      </div>
    </div>
  )
}

export default StickyAppointmentCTA
