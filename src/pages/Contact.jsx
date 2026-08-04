import { Helmet } from 'react-helmet-async'
import Contact from '../components/Contact.jsx'
import SeoStructuredData from '../components/SeoStructuredData.jsx'
import { seoPages } from '../data/siteData.js'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://konabarilabaidhospital.com/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://konabarilabaidhospital.com/contact' },
  ],
}

function ContactPage() {
  return (
    <main>
      <Helmet>
        <html lang="bn-BD" />
        <title>{seoPages.contact.title}</title>
        <meta name="description" content={seoPages.contact.description} />
        <meta name="keywords" content={seoPages.contact.keywords.join(', ')} />
      </Helmet>
      <SeoStructuredData schemas={breadcrumbSchema} />
      <Contact />
    </main>
  )
}

export default ContactPage
