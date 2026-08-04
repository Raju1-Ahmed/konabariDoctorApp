import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import LoadingIndicator from '../components/LoadingIndicator.jsx'
import LazySection from '../components/LazySection.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Slide from '../components/Slides.jsx'

const AppointmentForm = lazy(() => import('../components/AppointmentForm.jsx'))
const Counter = lazy(() => import('../components/Counter.jsx'))
const Department = lazy(() => import('../components/Department.jsx'))
const DoctorsSchedule = lazy(() => import('../components/DoctorsSchedule.jsx'))
const Emergency = lazy(() => import('../components/Emergency.jsx'))
const Facilities = lazy(() => import('../components/Facilities.jsx'))
const Gallery = lazy(() => import('../components/Gallery.jsx'))
const News = lazy(() => import('../components/News.jsx'))
const QuickServices = lazy(() => import('../components/QuickServices.jsx'))
const Testimonial = lazy(() => import('../components/Testimonial.jsx'))
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs.jsx'))

function SectionFallback() {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <LoadingIndicator label="Loading section" />
    </div>
  )
}

function Home() {
  return (
    <main>
      <Helmet>
        <html lang="bn-BD" />
        <title>Konabari Lab Aid Hospital | Official Website, Doctors & Appointment Demo</title>
        <meta
          name="description"
          content="Konabari Lab Aid Hospital website demo with doctors, departments, online appointment, emergency care, facilities, gallery, patient reviews and Google Map contact."
        />
        <meta
          name="keywords"
          content="Konabari Lab Aid Hospital, Gazipur hospital, doctor appointment, diagnostic center, emergency hospital, hospital website demo"
        />
        <meta property="og:title" content="Konabari Lab Aid Hospital Website Demo" />
        <meta
          property="og:description"
          content="Corporate hospital website demo for patient trust, online appointment, doctor schedule, emergency contact and digital branding."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Slide />

      <LazySection minHeight="36rem">
        <Suspense fallback={<SectionFallback />}>
          <DoctorsSchedule />
        </Suspense>
      </LazySection>

      <LazySection minHeight="18rem">
        <Reveal>
          <Suspense fallback={<SectionFallback />}>
            <QuickServices />
          </Suspense>
        </Reveal>
      </LazySection>

      <LazySection minHeight="26rem">
        <Reveal>
          <Suspense fallback={<SectionFallback />}>
            <Department />
          </Suspense>
        </Reveal>
      </LazySection>

      <LazySection minHeight="18rem">
        <Reveal>
          <Suspense fallback={<SectionFallback />}>
            <WhyChooseUs />
          </Suspense>
        </Reveal>
      </LazySection>

      <LazySection minHeight="16rem">
        <Suspense fallback={<SectionFallback />}>
          <Counter />
        </Suspense>
      </LazySection>

      <LazySection minHeight="28rem">
        <Reveal>
          <Suspense fallback={<SectionFallback />}>
            <Facilities />
          </Suspense>
        </Reveal>
      </LazySection>

      <LazySection minHeight="32rem">
        <Reveal>
          <Suspense fallback={<SectionFallback />}>
            <Gallery />
          </Suspense>
        </Reveal>
      </LazySection>

      <LazySection minHeight="24rem">
        <Reveal>
          <Suspense fallback={<SectionFallback />}>
            <Testimonial />
          </Suspense>
        </Reveal>
      </LazySection>

      <LazySection minHeight="14rem">
        <Reveal>
          <Suspense fallback={<SectionFallback />}>
            <Emergency />
          </Suspense>
        </Reveal>
      </LazySection>

      <LazySection minHeight="20rem">
        <Reveal>
          <Suspense fallback={<SectionFallback />}>
            <News />
          </Suspense>
        </Reveal>
      </LazySection>

      <LazySection minHeight="30rem">
        <Reveal>
          <section className="section-padding bg-white" id="appointment">
            <div className="section-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeader
                align="left"
                eyebrow="Appointment"
                title="Book Appointment Online"
                text="Patients can request doctor appointments from the website."
              />

              <Suspense fallback={<SectionFallback />}>
                <AppointmentForm />
              </Suspense>
            </div>
          </section>
        </Reveal>
      </LazySection>
    </main>
  )
}

export default Home
