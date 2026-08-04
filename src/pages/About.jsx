import { Helmet } from 'react-helmet-async'
import AboutSection from '../components/About.jsx'
import SeoStructuredData from '../components/SeoStructuredData.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import ManagingDirectors from '../components/ManagingDirectors.jsx'
import { seoPages } from '../data/siteData.js'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://konabarilabaidhospital.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://konabarilabaidhospital.com/about' },
  ],
}

function AboutPage() {
  return (
    <main>
      <Helmet>
        <html lang="bn-BD" />
        <title>{seoPages.about.title}</title>
        <meta name="description" content={seoPages.about.description} />
        <meta name="keywords" content={seoPages.about.keywords.join(', ')} />
      </Helmet>
      <SeoStructuredData schemas={breadcrumbSchema} />
      <AboutSection />
      <ManagingDirectors />
      <WhyChooseUs />
    </main>
  )
}

export default AboutPage
