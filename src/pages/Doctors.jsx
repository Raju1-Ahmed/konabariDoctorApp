import { Helmet } from 'react-helmet-async'
import DoctorsSchedule from '../components/DoctorsSchedule.jsx'
import SeoStructuredData from '../components/SeoStructuredData.jsx'
import { seoPages } from '../data/siteData.js'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://konabarilabaidhospital.com/' },
    { '@type': 'ListItem', position: 2, name: 'Doctors', item: 'https://konabarilabaidhospital.com/doctors' },
  ],
}

function DoctorsPage() {
  return (
    <main className="bg-light py-12 md:py-16">
      <Helmet>
        <html lang="bn-BD" />
        <title>{seoPages.doctors.title}</title>
        <meta name="description" content={seoPages.doctors.description} />
        <meta name="keywords" content={seoPages.doctors.keywords.join(', ')} />
      </Helmet>
      <SeoStructuredData schemas={breadcrumbSchema} />
      <DoctorsSchedule compact />
    </main>
  )
}

export default DoctorsPage
