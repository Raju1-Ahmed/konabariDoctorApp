import { Helmet } from 'react-helmet-async'
import Contact from '../components/Contact.jsx'
import { seoPages } from '../data/siteData.js'

function ContactPage() {
  return (
    <main>
      <Helmet>
        <html lang="bn-BD" />
        <title>{seoPages.contact.title}</title>
        <meta name="description" content={seoPages.contact.description} />
        <meta name="keywords" content={seoPages.contact.keywords.join(', ')} />
      </Helmet>
      <Contact />
    </main>
  )
}

export default ContactPage
