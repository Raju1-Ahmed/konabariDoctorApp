import { FaCheckCircle } from 'react-icons/fa'
import hospitalBuilding from '../assets/hospital-building.svg'
import SectionHeader from './SectionHeader.jsx'

const strengths = ['6 Floor Own Building', 'Experienced Doctors', 'Modern Equipment', 'Advanced Laboratory']

function About() {
  return (
    <section className="section-padding" id="about">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-5 -top-5 size-28 rounded-full bg-secondary/20 blur-2xl" />
          <div className="glass-panel relative rounded-[2rem] p-4">
            <img className="rounded-[1.5rem]" src={hospitalBuilding} alt="Konabari Lab Aid Hospital building" />
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

          <a className="mt-7 inline-flex font-black text-primary hover:text-accent" href="/about">
            Read More →
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
