import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import LoadingIndicator from './components/LoadingIndicator.jsx'
import Navbar from './components/Navbar.jsx'
import StickyAppointmentCTA from './components/StickyAppointmentCTA.jsx'
import useHashScroll from './hooks/useHashScroll.js'

const Home = lazy(() => import('./pages/Home.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))
const AppointmentPage = lazy(() => import('./pages/Appointment.jsx'))
const ContactPage = lazy(() => import('./pages/Contact.jsx'))
const DoctorsPage = lazy(() => import('./pages/Doctors.jsx'))
const Gallery = lazy(() => import('./components/Gallery.jsx'))
const AdminLayout = lazy(() => import('./components/admin/AdminLayout.jsx'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard.jsx'))
const AdminDoctors = lazy(() => import('./pages/admin/AdminDoctors.jsx'))
const AdminDoctorForm = lazy(() => import('./pages/admin/AdminDoctorForm.jsx'))
const AdminAppointments = lazy(() => import('./pages/admin/AdminAppointments.jsx'))

function App() {
  useHashScroll()
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen overflow-hidden bg-light text-dark">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-primary focus:shadow-xl"
        href="#main-content"
      >
        Skip to content
      </a>
      {isAdminRoute ? null : <Navbar />}
      <main id="main-content">
        <Suspense
          fallback={
            <div className="grid min-h-[60vh] place-items-center px-4 py-20">
              <LoadingIndicator label="Loading page content" />
            </div>
          }
        >
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
        </Suspense>
      </main>
      {isAdminRoute ? null : <StickyAppointmentCTA />}
      {isAdminRoute ? null : <Footer />}
    </div>
  )
}

export default App
