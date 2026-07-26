import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import StickyAppointmentCTA from './components/StickyAppointmentCTA.jsx'
import useHashScroll from './hooks/useHashScroll.js'
import AboutPage from './pages/About.jsx'
import AppointmentPage from './pages/Appointment.jsx'
import ContactPage from './pages/Contact.jsx'
import DoctorsPage from './pages/Doctors.jsx'
import Home from './pages/Home.jsx'
import Gallery from './components/Gallery.jsx'

function App() {
  useHashScroll()

  return (
    <div className="min-h-screen overflow-hidden bg-light text-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <StickyAppointmentCTA />
      <Footer />
    </div>
  )
}

export default App
