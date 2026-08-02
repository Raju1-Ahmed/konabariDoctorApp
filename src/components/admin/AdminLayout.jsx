import { Link, NavLink, Outlet } from 'react-router-dom'
import { FiActivity, FiCalendar, FiGrid, FiHome, FiUsers } from 'react-icons/fi'

const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: FiGrid },
  { label: 'Doctors', to: '/admin/doctors', icon: FiUsers },
  { label: 'Appointments', to: '/admin/appointments', icon: FiCalendar },
]

function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 bg-slate-900/80 px-5 py-6 backdrop-blur">
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-lg font-black text-white">
              <FiActivity />
            </div>
            <div>
              <p className="text-sm text-slate-300">Konabari Lab Aid</p>
              <h1 className="text-lg font-black">Admin Panel</h1>
            </div>
          </div>

          <nav className="mt-8 grid gap-2">
            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold transition ${
                      isActive ? 'bg-secondary text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                  to={item.to}
                >
                  <Icon className="text-lg" />
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          <Link
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 px-4 py-3 font-bold text-slate-200 transition hover:bg-white/5"
            to="/"
          >
            <FiHome />
            Back to site
          </Link>
        </aside>

        <main className="px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          <div className="rounded-[2rem] bg-white text-slate-900 shadow-2xl shadow-black/20">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
