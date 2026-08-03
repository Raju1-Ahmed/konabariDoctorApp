import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiEdit2, FiPlus, FiTrash2 } from 'react-icons/fi'
import { deleteAdminDoctor, fetchAdminDoctors } from '../../api/admin.js'
import LoadingIndicator from '../LoadingIndicator.jsx'
import { resolveImageUrl } from '../../utils/imageUrl.js'

function DoctorManagementTable({ title = 'Doctors', description = '', showAddButton = true, onCountChange }) {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState('')
  const location = useLocation()

  useEffect(() => {
    let active = true

    const loadDoctors = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetchAdminDoctors()
        const doctorList = response.data.data || []

        if (!active) return

        setDoctors(doctorList)
        onCountChange?.(doctorList.length)
      } catch (requestError) {
        if (active) {
          setError(requestError?.response?.data?.message || 'Failed to load doctors')
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadDoctors()

    return () => {
      active = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.state?.refreshToken, onCountChange])

  const handleDelete = async (doctorId) => {
    const confirmed = window.confirm('Delete this doctor?')
    if (!confirmed) return

    setDeletingId(doctorId)

    try {
      await deleteAdminDoctor(doctorId)
      setDoctors((currentDoctors) => {
        const nextDoctors = currentDoctors.filter((doctor) => doctor._id !== doctorId)
        onCountChange?.(nextDoctors.length)
        return nextDoctors
      })
    } catch (requestError) {
      alert(requestError?.response?.data?.message || 'Delete failed')
    } finally {
      setDeletingId('')
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">Doctor Management</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">{title}</h2>
          {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
        </div>

        {showAddButton ? (
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-black text-white transition hover:brightness-110"
            to="/admin/doctors/new"
          >
            <FiPlus />
            Add Doctor
          </Link>
        ) : null}
      </div>

      {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

      {loading ? (
        <div className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <LoadingIndicator className="justify-start" label="Doctors are loading" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white" key={index}>
                <div className="h-48 animate-pulse bg-slate-100" />
                <div className="space-y-3 p-5">
                  <div className="h-4 w-20 animate-pulse rounded-full bg-slate-100" />
                  <div className="h-6 w-3/4 animate-pulse rounded-full bg-slate-100" />
                  <div className="h-4 w-1/2 animate-pulse rounded-full bg-slate-100" />
                  <div className="grid gap-3 pt-2">
                    <div className="h-16 animate-pulse rounded-2xl bg-slate-100" />
                    <div className="h-16 animate-pulse rounded-2xl bg-slate-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : doctors.length === 0 ? (
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">No doctors found.</div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              key={doctor._id}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {doctor.image ? (
                  <img alt={doctor.name} className="h-full w-full object-cover" src={resolveImageUrl(doctor.image)} />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 to-sky-100 text-5xl font-black text-teal-700">
                    {doctor.name?.[0] || 'D'}
                  </div>
                )}
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black shadow ${
                    doctor.isActive ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-white'
                  }`}
                >
                  {doctor.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
                    {doctor.day || 'Day not set'}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-slate-900">{doctor.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{doctor.department || 'Department not set'}</p>
                </div>

                <div className="grid gap-3 text-sm">
                  {[
                    ['Title', doctor.title],
                    ['Degrees', doctor.degrees],
                    ['Designation', doctor.designation],
                    ['Chamber Time', doctor.chamberTime],
                    ['Source ID', doctor.sourceId],
                  ].map(([label, value]) => (
                    <div className="rounded-2xl bg-slate-50 px-4 py-3" key={label}>
                      <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">{label}</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">{value || '—'}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Link
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                    to={`/admin/doctors/${doctor._id}/edit`}
                  >
                    <FiEdit2 />
                    Edit
                  </Link>
                  <button
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-red-200 px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={deletingId === doctor._id}
                    type="button"
                    onClick={() => handleDelete(doctor._id)}
                  >
                    {deletingId === doctor._id ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
                        Deleting…
                      </>
                    ) : (
                      <>
                        <FiTrash2 />
                        Delete
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default DoctorManagementTable
