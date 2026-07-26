import { FaCalendarCheck } from 'react-icons/fa'
import { departments } from '../data/siteData.js'

function AppointmentForm({ compact = false }) {
  return (
    <form className={`grid gap-4 rounded-[1.75rem] bg-white p-6 shadow-xl shadow-slate-900/5 ${compact ? '' : 'md:grid-cols-2'}`}>
      <label className="grid gap-2 font-bold text-slate-700">
        Patient Name
        <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-secondary" placeholder="Enter patient name" type="text" />
      </label>
      <label className="grid gap-2 font-bold text-slate-700">
        Phone Number
        <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-secondary" placeholder="+880 1XXX XXXXXX" type="tel" />
      </label>
      <label className="grid gap-2 font-bold text-slate-700 md:col-span-2">
        Department
        <select className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-secondary" defaultValue="">
          <option value="" disabled>
            Select department
          </option>
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 font-bold text-slate-700 md:col-span-2">
        Message
        <textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-secondary" placeholder="Preferred doctor, date or patient concern" />
      </label>
      <button className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-black text-white md:col-span-2" type="button">
        <FaCalendarCheck />
        Submit Request
      </button>
    </form>
  )
}

export default AppointmentForm
