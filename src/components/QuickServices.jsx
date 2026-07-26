import { FaAmbulance, FaCalendarCheck, FaFileMedical, FaFlask, FaPhoneAlt, FaUserMd } from 'react-icons/fa'
import { quickServices } from '../data/siteData.js'

const serviceIcons = [FaUserMd, FaCalendarCheck, FaFlask, FaAmbulance, FaFileMedical, FaPhoneAlt]

function QuickServices() {
  return (
    <section className="-mt-8 relative z-10">
      <div className="section-container grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {quickServices.map((service, index) => {
          const ServiceIcon = serviceIcons[index]

          return (
            <article
              className="glass-panel rounded-3xl p-5 text-center transition hover:-translate-y-2 hover:border-secondary"
              key={service.title}
            >
              <div className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-teal-50 text-2xl text-primary">
                <ServiceIcon />
              </div>
              <h3 className="font-poppins text-base font-black text-dark">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{service.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default QuickServices
