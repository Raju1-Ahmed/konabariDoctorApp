import { Helmet } from 'react-helmet-async'
import About from '../components/About.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import ManagingDirectors from '../components/ManagingDirectors.jsx'

function AboutPage() {
  return (
    <main>
      <Helmet>
        <html lang="bn-BD" />
        <title>About | Konabari Lab Aid Hospital</title>
        <meta
          name="description"
          content="Learn about Konabari Lab Aid Hospital, its modern facilities, experienced doctors, emergency service and patient-focused healthcare."
        />
      </Helmet>
      <About />
      <ManagingDirectors/>
      <WhyChooseUs />
    </main>
  )
}

export default AboutPage
