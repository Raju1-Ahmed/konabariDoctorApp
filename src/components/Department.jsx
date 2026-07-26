import { FaStethoscope } from 'react-icons/fa'
import { departments } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function Department() {
  return (
    <section className="bg-white section-padding" id="departments">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Departments"
          title="Specialized care departments"
          text="Each department page can show doctors, schedules, service details, tests and appointment buttons."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {departments.map((department) => (
            <article
              className="group rounded-3xl border border-slate-100 bg-light p-6 transition hover:-translate-y-2 hover:border-secondary hover:bg-teal-50"
              key={department}
            >
              <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-white text-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white">
                <FaStethoscope />
              </div>
              <h3 className="font-poppins text-lg font-black text-dark">{department}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">Doctor, tests, schedule and patient guidance.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Department
