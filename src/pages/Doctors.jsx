import { Helmet } from 'react-helmet-async'
import DoctorsSchedule from '../components/DoctorsSchedule.jsx'
import { seoPages } from '../data/siteData.js'

function DoctorsPage() {
  return (
    <main className="bg-light py-12 md:py-16">
      <Helmet>
        <html lang="bn-BD" />
        <title>{seoPages.doctors.title}</title>
        <meta name="description" content={seoPages.doctors.description} />
        <meta name="keywords" content={seoPages.doctors.keywords.join(', ')} />
      </Helmet>
      <DoctorsSchedule compact />
    </main>
  )
}

export default DoctorsPage
