import { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FiClock, FiPhone, FiTrash2, FiUser, FiUsers } from 'react-icons/fi'
import { deleteAdminAppointment, fetchAdminAppointments } from '../../api/admin.js'

function AdminAppointments() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState('')

  const loadAppointments = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetchAdminAppointments()
      setAppointments(response.data.data || [])
    } catch (requestError) {
      setError(requestError?.response?.data?.message || 'Failed to load appointments')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadAppointments()
  }, [loadAppointments])

  const handleDelete = async (appointmentId) => {
    const confirmed = window.confirm('Delete this appointment?')
    if (!confirmed) return

    setDeletingId(appointmentId)
    setError('')

    try {
      await deleteAdminAppointment(appointmentId)
      setAppointments((currentAppointments) =>
        currentAppointments.filter((appointment) => appointment._id !== appointmentId)
      )
    } catch (requestError) {
      setError(requestError?.response?.data?.message || 'Delete failed')
    } finally {
      setDeletingId('')
    }
  }

  return (
    <>
      <Helmet>
        <title>Appointments | Admin</title>
      </Helmet>

      <div className="space-y-6 p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">Booking Queue</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Appointments</h1>
            <p className="mt-2 text-slate-600">Manage patient bookings from one place.</p>
          </div>

          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Total Appointments</p>
            <p className="mt-1 text-2xl font-black text-slate-900">{appointments.length}</p>
          </div>
        </div>

        {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

        {loading ? (
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">Loading appointments…</div>
        ) : appointments.length === 0 ? (
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">No appointments found.</div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {appointments.map((appointment) => (
              <article
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                key={appointment._id}
              >
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-teal-50 to-white p-5">
                  <div className="space-y-1">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-teal-600">Appointment Request</p>
                    <h2 className="text-xl font-black text-slate-900">{appointment.patientName}</h2>
                    <p className="text-sm font-semibold text-slate-500">
                      {appointment.doctorName || '—'} {appointment.department ? `· ${appointment.department}` : ''}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">
                    {appointment.status}
                  </span>
                </div>

                <div className="space-y-3 p-5">
                  <div className="grid gap-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <FiPhone className="text-primary" />
                      <span className="font-semibold text-slate-900">Phone:</span> {appointment.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiUser className="text-primary" />
                      <span className="font-semibold text-slate-900">Doctor:</span> {appointment.doctorName || '—'}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiUsers className="text-primary" />
                      <span className="font-semibold text-slate-900">Department:</span> {appointment.department || '—'}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiClock className="text-primary" />
                      <span className="font-semibold text-slate-900">Day:</span> {appointment.day || '—'}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiClock className="text-primary" />
                      <span className="font-semibold text-slate-900">Chamber Time:</span> {appointment.chamberTime || '—'}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                          appointment.notifiedByEmail ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {appointment.notifiedByEmail ? 'Email sent' : 'Email pending'}
                      </span>
                      <p className="text-xs text-slate-400">{new Date(appointment.createdAt).toLocaleString()}</p>
                    </div>

                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-70"
                      disabled={deletingId === appointment._id}
                      onClick={() => handleDelete(appointment._id)}
                      type="button"
                    >
                      <FiTrash2 />
                      {deletingId === appointment._id ? 'Deleting…' : 'Delete'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default AdminAppointments
