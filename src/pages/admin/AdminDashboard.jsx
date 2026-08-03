import { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FiActivity, FiCalendar, FiUsers } from 'react-icons/fi'
import { fetchAdminAppointments, fetchAdminDoctors } from '../../api/admin.js'
import DoctorManagementTable from '../../components/admin/DoctorManagementTable.jsx'

function StatCard({ title, value, icon: Icon, accent = 'bg-teal-500' }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-black text-slate-900">{value}</h3>
        </div>
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent} text-2xl text-white`}>
          <Icon />
        </div>
      </div>
    </div>
  )
}

function AdminDashboard() {
  const [stats, setStats] = useState({ doctors: 0, appointments: 0 })

  const handleDoctorCountChange = useCallback((count) => {
    setStats((current) => ({ ...current, doctors: count }))
  }, [])

  useEffect(() => {
    let active = true

    const load = async () => {
      try {
        const [doctorsResponse, appointmentsResponse] = await Promise.allSettled([
          fetchAdminDoctors(),
          fetchAdminAppointments(),
        ])

        if (!active) return

        setStats({
          doctors: doctorsResponse.status === 'fulfilled' ? doctorsResponse.value.data.data?.length || 0 : 0,
          appointments:
            appointmentsResponse.status === 'fulfilled' ? appointmentsResponse.value.data.data?.length || 0 : 0,
        })
      } catch {
        if (active) {
          setStats({ doctors: 0, appointments: 0 })
        }
      }
    }

    load()

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Konabari Lab Aid Hospital</title>
      </Helmet>

      <div className="space-y-6 p-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Dashboard Overview</h1>
          <p className="mt-2 text-slate-600">Quick overview of doctors and appointment requests.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard accent="bg-primary" icon={FiUsers} title="Total Doctors" value={stats.doctors} />
          <StatCard accent="bg-secondary" icon={FiCalendar} title="Appointments" value={stats.appointments} />
          <StatCard accent="bg-orange-500" icon={FiActivity} title="Panel Status" value="Active" />
        </div>

        <DoctorManagementTable
          description="Update or delete doctors directly from the dashboard."
          onCountChange={handleDoctorCountChange}
          title="Doctors List"
        />
      </div>
    </>
  )
}

export default AdminDashboard
