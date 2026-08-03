import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createAdminDoctor, fetchAdminDoctor, updateAdminDoctor } from '../../api/admin.js'
import LoadingIndicator from '../../components/LoadingIndicator.jsx'
import { resolveImageUrl } from '../../utils/imageUrl.js'

const initialState = {
  day: '',
  name: '',
  title: '',
  degrees: '',
  designation: '',
  chamberTime: '',
  department: '',
}

function AdminDoctorForm() {
  const { id } = useParams()
  const isEditMode = Boolean(id)
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [loading, setLoading] = useState(isEditMode)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    const loadDoctor = async () => {
      if (!isEditMode) {
        setLoading(false)
        return
      }

      try {
        const response = await fetchAdminDoctor(id)
        if (!active) return

        const doctor = response.data.data || {}
        setFormData({
          day: doctor.day || '',
          name: doctor.name || '',
          title: doctor.title || '',
          degrees: doctor.degrees || '',
          designation: doctor.designation || '',
          chamberTime: doctor.chamberTime || '',
          department: doctor.department || '',
        })
        setImagePreview(doctor.image || '')
      } catch (requestError) {
        if (active) {
          setError(requestError?.response?.data?.message || 'Failed to load doctor')
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadDoctor()

    return () => {
      active = false
    }
  }, [id, isEditMode])

  useEffect(() => {
    return () => {
      if (imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const pageTitle = useMemo(() => (isEditMode ? 'Edit Doctor' : 'Add Doctor'), [isEditMode])

  const handleChange = (event) => {
    const { name, value, files } = event.target

    if (name === 'image') {
      const imageFile = files?.[0]

      if (imageFile) {
        setSelectedImage(imageFile)
        setImagePreview(URL.createObjectURL(imageFile))
      }

      return
    }

    setFormData((currentValue) => ({
      ...currentValue,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')

    const payload = new FormData()
    payload.append('day', formData.day || '')
    payload.append('name', formData.name || '')
    payload.append('title', formData.title || '')
    payload.append('degrees', formData.degrees || '')
    payload.append('designation', formData.designation || '')
    payload.append('chamberTime', formData.chamberTime || '')
    payload.append('department', formData.department || '')

    if (selectedImage) {
      payload.append('image', selectedImage)
    }

    try {
      if (isEditMode) {
        await updateAdminDoctor(id, payload)
      } else {
        await createAdminDoctor(payload)
      }

      navigate('/admin/doctors', { replace: true, state: { refreshToken: Date.now() } })
    } catch (requestError) {
      setError(requestError?.response?.data?.message || 'Save failed')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="p-4 sm:p-6">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <LoadingIndicator label="Doctor form is loading" />
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Admin</title>
      </Helmet>

      <div className="space-y-5 p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-teal-600 sm:text-sm">Doctor Management</p>
            <h1 className="mt-2 break-words text-2xl font-black text-slate-900 sm:text-3xl">{pageTitle}</h1>
          </div>
          <Link
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-5 py-3 font-bold text-slate-700 sm:w-auto"
            to="/admin/doctors"
          >
            Back to doctors
          </Link>
        </div>

        {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

        <form
          className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          {[
            ['day', 'Day'],
            ['name', 'Name'],
            ['department', 'Department'],
            ['title', 'Title'],
            ['chamberTime', 'Chamber Time'],
          ].map(([field, label]) => (
            <label className="grid gap-2 font-semibold text-slate-700" key={field}>
              <span className="text-sm sm:text-base">{label}</span>
              <input
                className="min-w-0 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-secondary sm:text-base"
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </label>
          ))}

          <label className="grid gap-2 font-semibold text-slate-700 md:col-span-2">
            <span className="text-sm sm:text-base">Doctor Image</span>
            <input
              accept="image/*"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-bold file:text-white focus:border-secondary sm:text-base"
              name="image"
              type="file"
              onChange={handleChange}
            />
          </label>

          <div className="md:col-span-2">
            {imagePreview ? (
              <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50">
                <div className="border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-600">Image Preview</div>
                <img
                  alt="Doctor preview"
                  className="h-36 w-full bg-white object-contain p-3 sm:h-40"
                  decoding="async"
                  loading="lazy"
                  src={resolveImageUrl(imagePreview)}
                />
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-slate-300 px-4 py-4 text-sm text-slate-500">
                No image selected yet.
              </p>
            )}
          </div>

          <label className="grid gap-2 font-semibold text-slate-700 md:col-span-2">
            <span className="text-sm sm:text-base">Degrees</span>
            <textarea
              className="min-h-24 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-secondary sm:text-base"
              name="degrees"
              value={formData.degrees}
              onChange={handleChange}
            />
          </label>

          <label className="grid gap-2 font-semibold text-slate-700 md:col-span-2">
            <span className="text-sm sm:text-base">Designation</span>
            <textarea
              className="min-h-24 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-secondary sm:text-base"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </label>

          <div className="md:col-span-2">
            <button
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 font-black text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              disabled={saving}
              type="submit"
            >
              {saving ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Saving…
                </span>
              ) : isEditMode ? 'Update Doctor' : 'Create Doctor'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminDoctorForm
