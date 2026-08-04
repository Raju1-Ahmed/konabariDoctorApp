import { Helmet } from 'react-helmet-async'
import AppointmentForm from '../components/AppointmentForm.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import SeoStructuredData from '../components/SeoStructuredData.jsx'
import { seoPages } from '../data/siteData.js'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://konabarilabaidhospital.com/' },
    { '@type': 'ListItem', position: 2, name: 'Appointment', item: 'https://konabarilabaidhospital.com/appointment' },
  ],
}

function AppointmentPage() {
  return (
    <main className="section-padding bg-teal-50">
      <Helmet>
        <html lang="bn-BD" />
        <title>{seoPages.appointment.title}</title>
        <meta name="description" content={seoPages.appointment.description} />
        <meta name="keywords" content={seoPages.appointment.keywords.join(', ')} />
      </Helmet>
      <SeoStructuredData schemas={breadcrumbSchema} />
      <div className="section-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          align="left"
          eyebrow="Appointment"
          title="Request an appointment"
          text="This demo form shows how patients can submit appointment requests through the official website."
        />
        <AppointmentForm />
      </div>
    </main>
  )
}

export default AppointmentPage
