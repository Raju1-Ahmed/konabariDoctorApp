import { Helmet } from 'react-helmet-async'
import AboutSection from '../components/About.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import ManagingDirectors from '../components/ManagingDirectors.jsx'
import { seoPages } from '../data/siteData.js'

function AboutPage() {
  return (
    <main>
      <Helmet>
        <html lang="bn-BD" />
        <title>{seoPages.about.title}</title>
        <meta name="description" content={seoPages.about.description} />
        <meta name="keywords" content={seoPages.about.keywords.join(', ')} />
      </Helmet>
      <AboutSection />
      <ManagingDirectors />
      <WhyChooseUs />
    </main>
  )
}

export default AboutPage
