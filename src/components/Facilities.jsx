import {
  FaAmbulance,
  FaBaby,
  FaBed,
  FaClinicMedical,
  FaMicroscope,
  FaParking,
  FaPills,
  FaProcedures,
} from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import lab1 from '../assets/LabAid Hospital Konabari electric Machine (1).jpeg'
import lab2 from '../assets/LabAid Hospital Konabari electric Machine (2).jpeg'
import lab3 from '../assets/LabAid Hospital Konabari electric Machine (3).jpeg'
import lab4 from '../assets/LabAid Hospital Konabari electric Machine (4).jpeg'
import lab5 from '../assets/LabAid Hospital Konabari electric Machine (5).jpeg'
import { facilities } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

const facilityIcons = [
  FaProcedures,
  FaBaby,
  FaClinicMedical,
  FaPills,
  FaMicroscope,
  FaAmbulance,
  FaBed,
  FaParking,
]

const labImages = [lab1, lab2, lab3, lab4, lab5]

function Facilities() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50 to-teal-50" id="facilities">
      <div className="section-container">
        <SectionHeader
          eyebrow="Facilities"
          title="Hospital facilities and smart laboratory"
          text="Showcase the service stack clearly: ICU, NICU, OT, lab, ambulance, cabin and parking, followed by a visual gallery."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => {
            const FacilityIcon = facilityIcons[index]

            return (
              <article
                className="flex items-center gap-4 rounded-3xl border border-white bg-white p-5 shadow-xl shadow-slate-900/5"
                key={facility}
              >
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-teal-50 text-2xl text-primary">
                  <FacilityIcon />
                </div>
                <div>
                  <h3 className="font-poppins text-lg font-black text-dark">{facility}</h3>
                  <p className="mt-1 text-sm text-slate-500">Available for patient care and diagnostics.</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
          >
            {labImages.map((image, index) => (
              <SwiperSlide key={index}>
                <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-slate-900/5">
                  <div className="relative overflow-hidden">
                    <img
                      alt={`Lab equipment ${index + 1}`}
                      className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
                      src={image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-10 p-6 text-white transition duration-500 group-hover:translate-y-0">
                      <h4 className="text-xl font-bold">Advanced Diagnostic Equipment</h4>
                      <p className="mt-2 text-sm text-slate-200">
                        Fast, reliable and accurate laboratory reporting for patients.
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Facilities
