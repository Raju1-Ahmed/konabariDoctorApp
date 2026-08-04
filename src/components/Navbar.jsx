import { useState } from 'react'
import { FaFacebookF, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdEmail, MdLanguage } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { contactInfo, navItems } from '../data/siteData.js'
import useLanguage from '../hooks/useLanguage.js'
import Logo from '../assets/LabAid_Hospital_Konabari_Branding main Logo.png'

function NavLinkItem({ item, onClick, className = '' }) {
  const isExternal =
    item.href.startsWith('http://') ||
    item.href.startsWith('https://') ||
    item.href.startsWith('mailto:') ||
    item.href.startsWith('tel:')

  if (isExternal) {
    return (
      <a className={className} href={item.href} onClick={onClick} rel="noreferrer noopener" target="_blank">
        {item.label}
      </a>
    )
  }

  return (
    <Link className={className} onClick={onClick} to={item.href}>
      {item.label}
    </Link>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-white/90 backdrop-blur-xl">
      <div className="bg-primary text-white">
        <div className="section-container flex flex-wrap items-center justify-between gap-3 py-2 text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <a className="inline-flex items-center gap-2 font-semibold" href={`tel:${contactInfo.emergency}`}>
              <FaPhoneAlt />
              Emergency: {contactInfo.emergency}
            </a>
            <a className="inline-flex items-center gap-2 font-semibold" href={`mailto:${contactInfo.email}`}>
              <MdEmail className="text-lg" />
              {contactInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href={contactInfo.facebook} aria-label="Facebook" rel="noreferrer noopener" target="_blank">
              <FaFacebookF />
            </a>
            <a href={contactInfo.whatsapp} aria-label="WhatsApp" rel="noreferrer noopener" target="_blank">
              <FaWhatsapp className="text-lg" />
            </a>
            <div className="inline-flex items-center gap-2">
              <MdLanguage className="text-lg" />
              <button
                className={`font-bold ${language === 'বাংলা' ? 'text-orange-200' : 'text-white'}`}
                type="button"
                onClick={() => setLanguage('বাংলা')}
              >
                বাংলা
              </button>
              <span>|</span>
              <button
                className={`font-bold ${language === 'English' ? 'text-orange-200' : 'text-white'}`}
                type="button"
                onClick={() => setLanguage('English')}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container flex items-center justify-between gap-4 py-4">
        <Link aria-label="Konabari Lab Aid Hospital home" className="flex items-center" to="/">
          <img
            alt="Konabari Lab Aid Hospital"
            className="
              h-16
              w-auto
              object-contain
              transition-all
              duration-300
              hover:scale-105
              lg:h-20
              drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]
            "
            height={180}
            loading="eager"
            src={Logo}
            width={360}
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 text-sm font-bold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <NavLinkItem className="transition hover:text-primary" item={item} key={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden rounded-full bg-accent px-5 py-3 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 md:inline-flex"
            to="/appointment"
          >
            Book Appointment
          </Link>
          <button
            className="grid size-11 place-items-center rounded-full border border-slate-200 text-xl lg:hidden"
            type="button"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="section-container grid gap-2 border-t border-slate-100 pb-5 lg:hidden" id="mobile-menu">
          {navItems.map((item) => (
            <NavLinkItem
              className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-teal-50 hover:text-primary"
              key={item.label}
              item={item}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
          <Link
            className="rounded-2xl bg-accent px-4 py-3 text-center font-black text-white"
            to="/appointment"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
