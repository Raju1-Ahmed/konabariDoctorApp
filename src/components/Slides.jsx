import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import { Link } from "react-router-dom";
import {
  FiCalendar,
  FiPhoneCall,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero1 from "../assets/LabAid Hospital Konabari (1).png";
import hero2 from "../assets/LabAid Hospital Konabari (2).png";
import hero3 from "../assets/LabAid Hospital Konabari (3).jpeg";

const slides = [
  {
    image: hero1,
    tag: "Welcome to LabAid",
    title: "Trusted Healthcare For Your Family",
    subtitle: "Konabari Lab Aid Hospital",
    description:
      "Experienced doctors, modern equipment and compassionate care for every patient.",
  },
  {
    image: hero2,
    tag: "Emergency Service",
    title: "24/7 Emergency Medical Support",
    subtitle: "Fast • Reliable • Professional",
    description:
      "Instant trauma responses and emergency medical care paired with advanced diagnostic units.",
  },
  {
    image: hero3,
    tag: "Clinical Excellence",
    title: "Expert Doctors & Advanced Care",
    subtitle: "Modern Medical Technology",
    description:
      "Elevating local healthcare with advanced treatments and specialist doctors.",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative group">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        speed={900}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        className="h-[75vh] md:h-[85vh] lg:h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative h-full">

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    transform: isActive ? "scale(1.06)" : "scale(1)",
                    transition: "transform 6s linear",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                <div className="relative z-10 flex h-full items-center">
                  <div className="mx-auto w-full max-w-7xl px-6">

                    <span
                      className={`inline-block rounded-full bg-teal-500/20 border border-teal-400 px-5 py-2 text-sm font-bold text-teal-300 transition-all duration-700 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                    >
                      {slide.tag}
                    </span>

                    <h1
                      className={`mt-6 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl transition-all duration-700 delay-200 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    <h2
                      className={`mt-4 text-xl font-bold uppercase text-orange-400 transition-all duration-700 delay-500 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </h2>

                    <p
                      className={`mt-5 max-w-2xl text-lg leading-8 text-slate-300 transition-all duration-700 delay-700 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.description}
                    </p>

                    <div
                      className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-1000 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      <Link
                        to="/appointment"
                        className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
                      >
                        <span className="flex items-center gap-2">
                          <FiCalendar />
                          Book Appointment
                        </span>
                      </Link>

                      <a
                        href="tel:+8801911388288"
                        className="rounded-full border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
                      >
                        <span className="flex items-center gap-2">
                          <FiPhoneCall />
                          Call Now
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Navigation */}

        <button className="hero-prev absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur lg:grid">
          <FiChevronLeft size={24} />
        </button>

        <button className="hero-next absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur lg:grid">
          <FiChevronRight size={24} />
        </button>

        <div className="hero-pagination absolute bottom-8 z-20 flex w-full justify-center"></div>

      </Swiper>

      <style>{`
        .hero-pagination .swiper-pagination-bullet{
          width:14px;
          height:14px;
          background:white;
          opacity:.4;
          transition:.3s;
        }

        .hero-pagination .swiper-pagination-bullet-active{
          width:40px;
          border-radius:999px;
          background:#14b8a6;
          opacity:1;
        }
      `}</style>

    </section>
  );
}