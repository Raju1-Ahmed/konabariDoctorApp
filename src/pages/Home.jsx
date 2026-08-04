import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import LoadingIndicator from '../components/LoadingIndicator.jsx'
import LazySection from '../components/LazySection.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Slide from '../components/Slides.jsx'
import { organizationSchema, seoPages } from '../data/siteData.js'

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
        <title>{seoPages.home.title}</title>
        <meta name="description" content={seoPages.home.description} />
        <meta name="keywords" content={seoPages.home.keywords.join(', ')} />
        <meta property="og:title" content={seoPages.home.title} />
        <meta property="og:description" content={seoPages.home.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Konabari Lab Aid Hospital" />
        <meta property="og:locale" content="bn_BD" />
        <meta name="twitter:title" content={seoPages.home.title} />
        <meta name="twitter:description" content={seoPages.home.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
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
