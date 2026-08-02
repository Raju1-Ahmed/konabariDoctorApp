import { useState } from 'react'
import DoctorCard from './DoctorCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import doctorsData from '../data/DoctorsData.json'
import { doctorImageUrls, getDoctorImage } from '../data/doctorImages.js'

function DoctorsSchedule({ compact = false }) {
  const [activeDay, setActiveDay] = useState(0)
  const dayOffset = doctorsData
    .slice(0, activeDay)
    .reduce((total, day) => total + day.doctors.length, 0)
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeader
          eyebrow="Doctors"
          title="বিশেষজ্ঞ ডাক্তারদের তালিকা"
          text="দিন বেছে নিয়ে সেই দিনের ডাক্তারদের কার্ড, চেম্বার সময় এবং অ্যাপয়েন্টমেন্ট তথ্য দেখুন।"
        />

        <div className={`mb-10 flex flex-wrap justify-center gap-3 ${compact ? 'scale-95' : ''}`}>
          {doctorsData.map((day, index) => (
            <button
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                activeDay === index
                  ? 'bg-primary text-white shadow-lg shadow-teal-700/20'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-teal-50'
              }`}
              key={index}
              onClick={() => setActiveDay(index)}
            >
              {day.day}
            </button>
          ))}
        </div>

        <h2 className={`mb-8 text-center font-poppins font-black text-dark ${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
          {doctorsData[activeDay].day} সময়সূচি
        </h2>

        <div className={`grid ${compact ? 'gap-4 md:grid-cols-2 xl:grid-cols-3' : 'gap-6 md:grid-cols-2 xl:grid-cols-3'}`}>
          {doctorsData[activeDay].doctors.map((doctor, index) => (
            <DoctorCard
              doctor={{
                ...doctor,
                image:
                  activeDay === 0
                    ? getDoctorImage(doctor.name) || (doctor.image && doctor.image !== 'https://picsum.photos' ? doctor.image : '')
                    : doctor.image || doctorImageUrls[dayOffset + index] || '',
              }}
              compact={compact}
              key={doctor.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsSchedule
