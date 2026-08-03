import { useEffect, useMemo, useState } from 'react'
import { FaCalendarCheck, FaClock, FaUserMd } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import { createAppointment } from '../api/appointments.js'
import LoadingIndicator from './LoadingIndicator.jsx'

const buildInitialForm = (searchParams) => ({
  patientName: '',
  phone: '',
  department: searchParams.get('department') || '',
  doctorName: searchParams.get('doctorName') || '',
  day: searchParams.get('day') || '',
  chamberTime: searchParams.get('chamberTime') || '',
})

function AppointmentForm({ compact = false }) {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState(() => buildInitialForm(searchParams))
  const [submitting, setSubmitting] = useState(false)
  const [messageState, setMessageState] = useState({ type: '', text: '' })

  const selectedDoctor = useMemo(() => searchParams.get('doctorName') || '', [searchParams])
  const selectedDepartment = useMemo(() => searchParams.get('department') || '', [searchParams])
  const selectedDay = useMemo(() => searchParams.get('day') || '', [searchParams])
  const selectedChamberTime = useMemo(() => searchParams.get('chamberTime') || '', [searchParams])

  useEffect(() => {
    setFormData((currentValue) => ({
      ...currentValue,
      doctorName: searchParams.get('doctorName') || currentValue.doctorName,
      department: searchParams.get('department') || currentValue.department,
      day: searchParams.get('day') || currentValue.day,
      chamberTime: searchParams.get('chamberTime') || currentValue.chamberTime,
    }))
  }, [searchParams])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentValue) => ({
      ...currentValue,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setMessageState({ type: '', text: '' })

    try {
      const response = await createAppointment(formData)
      setMessageState({
        type: 'success',
        text: response.data?.message || 'Appointment request sent successfully.',
      })
      setFormData((currentValue) => ({
        ...buildInitialForm(searchParams),
        doctorName: currentValue.doctorName,
        department: currentValue.department,
        day: currentValue.day,
        chamberTime: currentValue.chamberTime,
      }))
    } catch (requestError) {
      setMessageState({
        type: 'error',
        text: requestError?.response?.data?.message || 'Failed to submit appointment request.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      aria-busy={submitting}
      className={`grid gap-4 rounded-[1.75rem] bg-white p-6 shadow-xl shadow-slate-900/5 ${
        compact ? '' : 'md:grid-cols-2'
      }`}
      onSubmit={handleSubmit}
    >
      {submitting ? (
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-teal-100 bg-teal-50 px-4 py-4">
            <LoadingIndicator className="justify-start" label="Appointment request is submitting" />
          </div>
        </div>
      ) : null}

      {(selectedDoctor || selectedDepartment || selectedDay || selectedChamberTime) && (
        <div className="md:col-span-2 grid gap-2 rounded-2xl border border-teal-100 bg-teal-50 px-4 py-4 text-sm text-slate-700">
          {selectedDoctor ? (
            <p className="flex items-center gap-2 font-semibold">
              <FaUserMd className="text-primary" />
              Selected doctor: <span className="font-black text-slate-900">{selectedDoctor}</span>
            </p>
          ) : null}

          <div className="grid gap-2 sm:grid-cols-2">
            {selectedDepartment ? (
              <p className="rounded-xl bg-white px-3 py-2 font-semibold text-slate-700">
                Department: <span className="font-black text-slate-900">{selectedDepartment}</span>
              </p>
            ) : null}
            {selectedDay ? (
              <p className="rounded-xl bg-white px-3 py-2 font-semibold text-slate-700">
                Day: <span className="font-black text-slate-900">{selectedDay}</span>
              </p>
            ) : null}
          </div>

          {selectedChamberTime ? (
            <p className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 font-semibold text-slate-700">
              <FaClock className="text-primary" />
              Chamber Time: <span className="font-black text-slate-900">{selectedChamberTime}</span>
            </p>
          ) : null}
        </div>
      )}

      <label className="grid gap-2 font-bold text-slate-700">
        Patient Name
        <input
          autoComplete="name"
          className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-secondary"
          name="patientName"
          onChange={handleChange}
          placeholder="Enter patient name"
          required
          type="text"
          value={formData.patientName}
        />
      </label>

      <label className="grid gap-2 font-bold text-slate-700">
        Phone Number
        <input
          autoComplete="tel"
          className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-secondary"
          name="phone"
          onChange={handleChange}
          placeholder="+880 1XXX XXXXXX"
          required
          type="tel"
          value={formData.phone}
        />
      </label>

      <label className="grid gap-2 font-bold text-slate-700">
        Doctor Name
        <input
          className="rounded-2xl border border-slate-200 px-4 py-4 font-semibold text-slate-700 outline-none focus:border-secondary"
          name="doctorName"
          onChange={handleChange}
          placeholder="Enter doctor name"
          value={formData.doctorName}
        />
      </label>

      <label className="grid gap-2 font-bold text-slate-700">
        Department
        <input
          className="rounded-2xl border border-slate-200 px-4 py-4 font-semibold text-slate-700 outline-none focus:border-secondary"
          name="department"
          onChange={handleChange}
          placeholder="Enter department"
          value={formData.department}
        />
      </label>

      <label className="grid gap-2 font-bold text-slate-700">
        Day
        <input
          className="rounded-2xl border border-slate-200 px-4 py-4 font-semibold text-slate-700 outline-none focus:border-secondary"
          name="day"
          onChange={handleChange}
          placeholder="Enter day"
          value={formData.day}
        />
      </label>

      <label className="grid gap-2 font-bold text-slate-700">
        Chamber Time
        <input
          className="rounded-2xl border border-slate-200 px-4 py-4 font-semibold text-slate-700 outline-none focus:border-secondary"
          name="chamberTime"
          onChange={handleChange}
          placeholder="Enter chamber time"
          value={formData.chamberTime}
        />
      </label>

      {messageState.text ? (
        <div
          className={`md:col-span-2 rounded-2xl px-4 py-3 text-sm font-semibold ${
            messageState.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {messageState.text}
        </div>
      ) : null}

      <button
        className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-black text-white md:col-span-2 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={submitting}
        type="submit"
      >
        {submitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Submitting…
          </>
        ) : (
          <>
            <FaCalendarCheck />
            Submit Request
          </>
        )}
      </button>
    </form>
  )
}

export default AppointmentForm
