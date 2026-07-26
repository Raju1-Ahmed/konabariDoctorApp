import { Helmet } from 'react-helmet-async'
import Contact from '../components/Contact.jsx'

function ContactPage() {
  return (
    <main>
      <Helmet>
        <html lang="bn-BD" />
        <title>Contact | Konabari Lab Aid Hospital</title>
        <meta
          name="description"
          content="Contact Konabari Lab Aid Hospital for address, phone, email, opening hours, emergency number and Google Map location."
        />
      </Helmet>
      <Contact />
    </main>
  )
}

export default ContactPage
