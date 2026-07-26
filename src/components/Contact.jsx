import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { contactInfo } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function Contact() {
  return (
    <section className="section-padding" id="contact">
      <div className="section-container">
        <SectionHeader
          eyebrow="Contact"
          title="Visit or contact the hospital"
          text="A Google Map with address, phone, email and opening hours makes patients act faster."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-slate-900/5">
            <iframe
              className="h-[430px] w-full border-0"
              src="https://www.google.com/maps?q=Konabari%20Gazipur%20Bangladesh&output=embed"
              title="Konabari Gazipur Google Map"
              loading="lazy"
            />
          </div>

          <div className="grid gap-4">
            <ContactItem icon={<FaMapMarkerAlt />} title="Address" value={contactInfo.address} />
            <ContactItem icon={<FaPhoneAlt />} title="Phone" value={contactInfo.emergency} />
            <ContactItem icon={<MdEmail />} title="Email" value={contactInfo.email} />
            <ContactItem icon={<FaClock />} title="Opening Hours" value={contactInfo.hours} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, title, value }) {
  return (
    <div className="flex gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5">
      <div className="grid size-12 place-items-center rounded-2xl bg-teal-50 text-xl text-primary">{icon}</div>
      <div>
        <h3 className="font-poppins font-black text-dark">{title}</h3>
        <p className="mt-1 text-slate-600">{value}</p>
      </div>
    </div>
  )
}

export default Contact
