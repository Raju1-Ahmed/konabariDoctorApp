import { FaStar } from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'
import 'swiper/css'
import 'swiper/css/pagination'

function Testimonial() {
  return (
    <section className="section-padding" id="testimonials">
      <div className="section-container">
        <SectionHeader
          eyebrow="Patient Testimonials"
          title="Patient review slider"
          text="Reviews help patients trust the hospital before booking appointments."
        />

        <Swiper
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <article className="mb-12 min-h-64 rounded-[1.75rem] bg-white p-7 shadow-xl shadow-slate-900/5">
                <div className="mb-5 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar key={`${testimonial.name}-${starIndex}`} />
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-600">“{testimonial.text}”</p>
                <strong className="mt-6 block font-poppins text-dark">{testimonial.name}</strong>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
