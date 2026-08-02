import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createAdminDoctor, fetchAdminDoctor, updateAdminDoctor } from '../../api/admin.js'
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
    return <div className="p-6 text-slate-600">Loading doctor form…</div>
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Admin</title>
      </Helmet>

      <div className="space-y-6 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">Doctor Management</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">{pageTitle}</h1>
          </div>
          <Link className="rounded-full border border-slate-200 px-5 py-3 font-bold text-slate-700" to="/admin/doctors">
            Back to doctors
          </Link>
        </div>

        {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

        <form className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2" onSubmit={handleSubmit}>
          {[
            ['day', 'Day'],
            ['name', 'Name'],
            ['department', 'Department'],
            ['title', 'Title'],
            ['chamberTime', 'Chamber Time'],
          ].map(([field, label]) => (
            <label className="grid gap-2 font-semibold text-slate-700" key={field}>
              {label}
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-secondary"
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </label>
          ))}

          <label className="grid gap-2 font-semibold text-slate-700 md:col-span-2">
            Doctor Image
            <input
              accept="image/*"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-bold file:text-white focus:border-secondary"
              name="image"
              type="file"
              onChange={handleChange}
            />
          </label>

          <div className="md:col-span-2">
            {imagePreview ? (
              <div className="mx-auto max-w-sm overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50">
                <div className="border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-600">Image Preview</div>
                <img alt="Doctor preview" className="h-40 w-full object-contain bg-white p-3" src={resolveImageUrl(imagePreview)} />
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-slate-300 px-4 py-4 text-sm text-slate-500">
                No image selected yet.
              </p>
            )}
          </div>

          <label className="grid gap-2 font-semibold text-slate-700 md:col-span-2">
            Degrees
            <textarea
              className="min-h-24 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-secondary"
              name="degrees"
              value={formData.degrees}
              onChange={handleChange}
            />
          </label>

          <label className="grid gap-2 font-semibold text-slate-700 md:col-span-2">
            Designation
            <textarea
              className="min-h-24 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-secondary"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </label>

          <div className="md:col-span-2">
            <button
              className="rounded-full bg-accent px-6 py-3.5 font-black text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={saving}
              type="submit"
            >
              {saving ? 'Saving…' : isEditMode ? 'Update Doctor' : 'Create Doctor'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminDoctorForm
