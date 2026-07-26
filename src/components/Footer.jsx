import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { contactInfo, departments, navItems } from '../data/siteData.js'

function Footer() {
  return (
    <footer className="bg-dark pt-16 text-white">
      <div className="section-container grid gap-10 pb-12 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Link className="flex items-center gap-3" to="/">
            <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl font-black">
              +
            </span>
            <span>
              <strong className="block font-poppins text-xl">Konabari Lab Aid</strong>
              <small className="font-hind text-teal-100">Hospital & Diagnostic Center</small>
            </span>
          </Link>
          <p className="mt-5 leading-8 text-slate-300">
            Complete digital hospital website concept with appointment, doctors, departments, gallery and contact.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="grid size-11 place-items-center rounded-full bg-white/10" href={contactInfo.facebook} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a className="grid size-11 place-items-center rounded-full bg-white/10" href={contactInfo.whatsapp} aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <FooterColumn title="Quick Links" items={navItems.slice(0, 6).map((item) => item.label)} />
        <FooterColumn title="Departments" items={departments.slice(0, 6)} />
        <div>
          <h3 className="font-poppins text-lg font-black">Contact</h3>
          <div className="mt-5 grid gap-3 text-slate-300">
            <span>{contactInfo.address}</span>
            <span>{contactInfo.emergency}</span>
            <span>{contactInfo.email}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        Copyright © 2026 Konabari Lab Aid Hospital. All rights reserved.
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-poppins text-lg font-black">{title}</h3>
      <div className="mt-5 grid gap-3 text-slate-300">
        {items.map((item) => (
          <a className="hover:text-secondary" href="/#" key={item}>
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
