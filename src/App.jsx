import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import StickyAppointmentCTA from './components/StickyAppointmentCTA.jsx'
import AdminLayout from './components/admin/AdminLayout.jsx'
import useHashScroll from './hooks/useHashScroll.js'
import AboutPage from './pages/About.jsx'
import AppointmentPage from './pages/Appointment.jsx'
import ContactPage from './pages/Contact.jsx'
import DoctorsPage from './pages/Doctors.jsx'
import Home from './pages/Home.jsx'
import Gallery from './components/Gallery.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminDoctors from './pages/admin/AdminDoctors.jsx'
import AdminDoctorForm from './pages/admin/AdminDoctorForm.jsx'
import AdminAppointments from './pages/admin/AdminAppointments.jsx'

function App() {
  useHashScroll()
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen overflow-hidden bg-light text-dark">
      {isAdminRoute ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate replace to="/admin/dashboard" />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="doctors" element={<AdminDoctors />} />
          <Route path="doctors/new" element={<AdminDoctorForm />} />
          <Route path="doctors/:id/edit" element={<AdminDoctorForm />} />
          <Route path="appointments" element={<AdminAppointments />} />
        </Route>
      </Routes>
      {isAdminRoute ? null : <StickyAppointmentCTA />}
      {isAdminRoute ? null : <Footer />}
    </div>
  )
}

export default App
