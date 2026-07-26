import { Helmet } from 'react-helmet-async'
import AppointmentForm from '../components/AppointmentForm.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

function AppointmentPage() {
  return (
    <main className="section-padding bg-teal-50">
      <Helmet>
        <html lang="bn-BD" />
        <title>Appointment | Konabari Lab Aid Hospital</title>
        <meta
          name="description"
          content="Request an online doctor appointment at Konabari Lab Aid Hospital through a professional hospital website appointment form."
        />
      </Helmet>
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
