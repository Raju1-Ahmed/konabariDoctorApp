import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import hospitalBuilding from '../assets/LabAid Hospital Konabari (1).webp'
import SectionHeader from './SectionHeader.jsx'

const strengths = ['6 Floor Own Building', 'Experienced Doctors', 'Modern Equipment', 'Advanced Laboratory']

function About() {
  return (
    <section className="section-padding" id="about">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-5 -top-5 size-28 rounded-full bg-secondary/20 blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
            <img
              className="relative z-10 h-auto w-full rounded-[1.5rem] object-cover shadow-xl"
              src={hospitalBuilding}
              alt="Konabari Lab Aid Hospital building"
              decoding="async"
              loading="lazy"
              width={1400}
              height={700}
            />
            <div className="absolute bottom-6 left-6 z-20 rounded-full bg-slate-900/85 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white backdrop-blur">
              Konabari Lab Aid Hospital
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About Hospital"
            title="Modern Healthcare with Compassion"
            text="Konabari Lab Aid Hospital can present its facilities, doctors, services and emergency support through a professional digital platform."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-sm" key={strength}>
                <FaCheckCircle className="text-secondary" />
                {strength}
              </div>
            ))}
          </div>

          <Link className="mt-7 inline-flex font-black text-primary hover:text-accent" to="/about">
            Read More →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
