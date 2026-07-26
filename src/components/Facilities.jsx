import {
  FaAmbulance,
  FaBaby,
  FaBed,
  FaClinicMedical,
  FaMicroscope,
  FaParking,
  FaPills,
  FaProcedures,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { facilities } from "../data/siteData.js";
import SectionHeader from "./SectionHeader.jsx";

import lab1 from "../assets/LabAid Hospital Konabari electric Machine (1).jpeg";
import lab2 from "../assets/LabAid Hospital Konabari electric Machine (2).jpeg";
import lab3 from "../assets/LabAid Hospital Konabari electric Machine (3).jpeg";
import lab4 from "../assets/LabAid Hospital Konabari electric Machine (4).jpeg";
import lab5 from "../assets/LabAid Hospital Konabari electric Machine (5).jpeg";

const facilityIcons = [
  FaProcedures,
  FaBaby,
  FaClinicMedical,
  FaPills,
  FaMicroscope,
  FaAmbulance,
  FaBed,
  FaParking,
];

const labImages = [lab1, lab2, lab3, lab4, lab5];

function Facilities() {
  return (
    <section
      id="facilities"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-teal-50 py-24"
    >
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-300/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="section-container relative z-10">

        <SectionHeader
          eyebrow="Facilities"
          title="Hospital Facilities & Smart Pathology Lab"
          text="Modern diagnostic laboratory with advanced medical equipment, experienced technicians and quality healthcare services."
        />

     

        {/* Laboratory Gallery */}

        <div className="mt-28">

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {labImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="group overflow-hidden rounded-[28px] bg-white shadow-xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={image}
                      alt={`Lab ${index + 1}`}
                      className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="absolute bottom-0 left-0 right-0 translate-y-10 p-6 text-white transition duration-500 group-hover:translate-y-0">
                      <h4 className="text-xl font-bold">
                        Advanced Diagnostic Equipment
                      </h4>

                      <p className="mt-2 text-sm text-slate-200">
                        High precision medical technology delivering fast,
                        reliable and accurate laboratory reports.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default Facilities;