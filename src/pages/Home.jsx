import { Helmet } from "react-helmet-async";
// import About from "../components/About";
import AppointmentForm from "../components/AppointmentForm";
// import Contact from "../components/Contact";
import Counter from "../components/Counter";
import Department from "../components/Department";
// import DoctorCard from "../components/DoctorCard";
import Emergency from "../components/Emergency";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import News from "../components/News";
import QuickServices from "../components/QuickServices";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import Slide from "../components/Slides";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import Doctors from "./Doctors";
function Home() {
  return (
    <main>
      <Helmet>
        <html lang="bn-BD" />
        <title>
          
          Konabari Lab Aid Hospital | Official Website, Doctors &
          Appointment Demo
        </title>

        <meta
          name="description"
          content="Konabari Lab Aid Hospital website demo with doctors, departments, online appointment, emergency care, facilities, gallery, patient reviews and Google Map contact."
        />

        <meta
          name="keywords"
          content="Konabari Lab Aid Hospital, Gazipur hospital, doctor appointment, diagnostic center, emergency hospital, hospital website demo"
        />

        <meta
          property="og:title"
          content="Konabari Lab Aid Hospital Website Demo"
        />

        <meta
          property="og:description"
          content="Corporate hospital website demo for patient trust, online appointment, doctor schedule, emergency contact and digital branding."
        />

        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <Slide />

      <Reveal>
        <QuickServices />
      </Reveal>

      {/* <Reveal>
        <About />
      </Reveal> */}

      <Reveal>
        <Department />
      </Reveal>

      {/* Doctors Section */}

      <Reveal>
  <Doctors/>
      </Reveal>

      <Reveal>
        <WhyChooseUs />
      </Reveal>

      <Counter />

      <Reveal>
        <Facilities />
      </Reveal>

      <Reveal>
        <Testimonial />
      </Reveal>

      <Reveal>
        <Emergency />
      </Reveal>

      <Reveal>
        <News />
      </Reveal>

      <Reveal>
        <section
          className="section-padding bg-white"
          id="appointment"
        >
          <div className="section-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            <SectionHeader
              align="left"
              eyebrow="Appointment"
              title="Book Appointment Online"
              text="Patients can request doctor appointments from the website."
            />

            <AppointmentForm />

          </div>
        </section>
      </Reveal>

      {/* <Reveal>
        <Contact />
      </Reveal> */}
    </main>
  );
}

export default Home;