import { useEffect, useMemo, useState } from 'react'
import DoctorCard from './DoctorCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import doctorsData from '../data/DoctorsData.json'
import { doctorImageUrls, getDoctorImage } from '../data/doctorImages.js'
import { fetchPublicDoctors } from '../api/doctors.js'

const dayOrder = doctorsData.map((entry) => entry.day)

function groupDoctorsByDay(doctors) {
  const grouped = new Map()

  for (const doctor of doctors) {
    const day = doctor.day || 'অন্য দিন'
    const current = grouped.get(day) || []
    grouped.set(day, [...current, doctor])
  }

  const orderedDays = [
    ...dayOrder.filter((day) => grouped.has(day)),
    ...Array.from(grouped.keys()).filter((day) => !dayOrder.includes(day)),
  ]

  return orderedDays.map((day) => ({
    day,
    doctors: (grouped.get(day) || []).sort((left, right) => {
      const leftOrder = Number(left.order || 0)
      const rightOrder = Number(right.order || 0)

      if (leftOrder !== rightOrder) return leftOrder - rightOrder
      return String(left.name || '').localeCompare(String(right.name || ''), 'bn')
    }),
  }))
}

function DoctorsSchedule({ compact = false }) {
  const [activeDay, setActiveDay] = useState(0)
  const [doctorsByDay, setDoctorsByDay] = useState(doctorsData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    const loadDoctors = async () => {
      try {
        const response = await fetchPublicDoctors()
        const doctors = response.data.data || []
        const groupedDoctors = groupDoctorsByDay(doctors)

        if (active) {
          setDoctorsByDay(groupedDoctors.length > 0 ? groupedDoctors : doctorsData)
          setError('')
        }
      } catch {
        if (active) {
          setDoctorsByDay(doctorsData)
          setError('')
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadDoctors()

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (activeDay >= doctorsByDay.length) {
      setActiveDay(0)
    }
  }, [activeDay, doctorsByDay.length])

  const activeDoctorsGroup = doctorsByDay[activeDay] || doctorsByDay[0]
  const dayOffset = doctorsByDay
    .slice(0, activeDay)
    .reduce((total, day) => total + day.doctors.length, 0)

  const dayButtons = useMemo(() => doctorsByDay.map((day) => day.day), [doctorsByDay])

  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeader
          eyebrow="Doctors"
          title="বিশেষজ্ঞ ডাক্তারদের তালিকা"
          text="দিন বেছে নিয়ে সেই দিনের ডাক্তারদের কার্ড, চেম্বার সময় এবং অ্যাপয়েন্টমেন্ট তথ্য দেখুন।"
        />

        <div className={`mb-10 flex flex-wrap justify-center gap-3 ${compact ? 'scale-95' : ''}`}>
          {dayButtons.map((day, index) => (
            <button
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                activeDay === index
                  ? 'bg-primary text-white shadow-lg shadow-teal-700/20'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-teal-50'
              }`}
              key={day}
              onClick={() => setActiveDay(index)}
              type="button"
            >
              {day}
            </button>
          ))}
        </div>

        <h2 className={`mb-8 text-center font-poppins font-black text-dark ${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
          {activeDoctorsGroup?.day || 'ডাক্তার'} তালিকা
        </h2>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center font-semibold text-slate-600 shadow-sm">
            ডাক্তারদের তথ্য লোড হচ্ছে…
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-center font-semibold text-red-700">
            ডাক্তারদের তথ্য লোড করা যাচ্ছে না।
          </div>
        ) : (
          <div className={`grid ${compact ? 'gap-4 md:grid-cols-2 xl:grid-cols-3' : 'gap-6 md:grid-cols-2 xl:grid-cols-3'}`}>
            {(activeDoctorsGroup?.doctors || []).map((doctor, index) => (
              <DoctorCard
                doctor={{
                  ...doctor,
                  image:
                    getDoctorImage(doctor.name) ||
                    doctor.image ||
                    doctorImageUrls[dayOffset + index] ||
                    '',
                }}
                compact={compact}
                key={doctor._id || doctor.sourceId || doctor.id || `${doctor.name}-${index}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default DoctorsSchedule
