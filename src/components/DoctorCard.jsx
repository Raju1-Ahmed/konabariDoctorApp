import { FaCalendarCheck, FaClock, FaUserMd } from 'react-icons/fa'
import { Link, createSearchParams } from 'react-router-dom'
import { resolveImageUrl } from '../utils/imageUrl.js'

function DoctorCard({ doctor, compact = false }) {
  const initials = doctor.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

  const imageSrc = doctor.image && doctor.image !== 'https://picsum.photos' ? resolveImageUrl(doctor.image) : ''
  const appointmentQuery = createSearchParams({
    doctorName: doctor.name || '',
    department: doctor.department || '',
    day: doctor.day || '',
    chamberTime: doctor.chamberTime || '',
  }).toString()

  return (
    <article
      className={`group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-xl shadow-slate-900/5 transition hover:-translate-y-2 hover:border-secondary ${
        compact ? 'h-full' : ''
      }`}
    >
      <div className={`relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-orange-50 ${compact ? 'p-4' : 'p-6'}`}>
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary shadow-sm">
          {doctor.department}
        </div>

        <div
          className={`mx-auto grid place-items-center rounded-[1.5rem] bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-teal-700/20 ${
            compact ? 'aspect-[16/10] max-w-[15rem]' : 'aspect-[4/3] max-w-[18rem]'
          }`}
        >
          {imageSrc ? (
            <a aria-label={`Open image of ${doctor.name}`} href={imageSrc} rel="noreferrer noopener" target="_blank">
              <img
                alt={doctor.name}
                className="h-full w-full rounded-[1.5rem] object-cover"
                decoding="async"
                loading="lazy"
                src={imageSrc}
              />
            </a>
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-[1.5rem]">
              <div className="grid size-28 place-items-center rounded-full bg-white/15 text-4xl font-black">
                {initials || <FaUserMd />}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={compact ? 'space-y-3 p-4' : 'space-y-4 p-6'}>
        <div>
          <h3 className={`font-poppins font-black leading-tight text-dark ${compact ? 'text-lg' : 'text-xl'}`}>{doctor.name}</h3>
          <p className={`mt-1 font-bold text-primary ${compact ? 'text-xs' : 'text-sm'}`}>{doctor.title}</p>
        </div>

        <div className={`rounded-2xl bg-slate-50 ${compact ? 'p-3' : 'p-4'}`}>
          <div className={`grid text-slate-600 ${compact ? 'gap-2 text-xs' : 'gap-3 text-sm'}`}>
            <p className={compact ? 'leading-5' : 'leading-6'}>{doctor.degrees}</p>
            <p className={compact ? 'leading-5' : 'leading-6'}>{doctor.designation}</p>
          </div>
        </div>

        <div className={`grid rounded-2xl bg-teal-50 ${compact ? 'gap-2 p-3' : 'gap-3 p-4'}`}>
          <div className={`flex items-center gap-2 font-black text-primary ${compact ? 'text-xs' : 'text-sm'}`}>
            <FaClock />
            আজকের চেম্বার সময়
          </div>
          <p className={`font-semibold text-slate-700 ${compact ? 'text-xs' : 'text-sm'}`}>{doctor.chamberTime}</p>
        </div>

        <Link
          className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent font-black text-white transition hover:bg-orange-600 ${
            compact ? 'px-4 py-2.5 text-sm' : 'px-5 py-3'
          }`}
          to={`/appointment?${appointmentQuery}`}
        >
          <FaCalendarCheck />
          অ্যাপয়েন্টমেন্ট নিন
        </Link>
      </div>
    </article>
  )
}

export default DoctorCard
