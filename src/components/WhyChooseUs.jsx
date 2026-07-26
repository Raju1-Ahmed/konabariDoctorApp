import { FaCheckCircle } from 'react-icons/fa'
import { whyChooseUs } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function WhyChooseUs() {
  return (
    <section className="section-padding" id="why-choose-us">
      <div className="section-container">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Reasons patients trust this hospital"
          text="This section turns hospital facilities into trust signals for patients and families."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((reason) => (
            <div className="flex items-center gap-3 rounded-3xl bg-white p-5 font-black text-slate-700 shadow-xl shadow-slate-900/5" key={reason}>
              <FaCheckCircle className="text-secondary" />
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
