import { Helmet } from "react-helmet-async";
import {
  FiCheckCircle,
  FiClock,
  FiShield,
  FiAward,
} from "react-icons/fi";

import lab1 from "../src/assets/LabAid Hospital Konabari electric Machine (1).jpeg";
import lab2 from "../src/assets/LabAid Hospital Konabari electric Machine (2).jpeg";
import lab3 from "../src/assets/LabAid Hospital Konabari electric Machine (3).jpeg";
import lab4 from "../src/assets/LabAid Hospital Konabari electric Machine (4).jpeg";

function Diagnostic() {
  return (
    <main className="bg-slate-50">

      <Helmet>
        <title>Diagnostic & Laboratory | Konabari Lab Aid Hospital</title>

        <meta
          name="description"
          content="Modern Diagnostic & Laboratory services with advanced machines and accurate reporting."
        />
      </Helmet>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-primary to-teal-700 text-white">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="section-container relative py-24">

          <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-bold">
            Advanced Diagnostic Centre
          </span>

          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight">
            Modern Laboratory &
            <br />
            Diagnostic Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-100 leading-8">
            Accurate diagnosis is the first step towards successful treatment.
            Konabari Lab Aid Hospital provides modern pathology and laboratory
            services using advanced technology and experienced professionals.
          </p>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="section-padding">

        <div className="section-container">

       

          <div className="mt-16 grid gap-10 lg:grid-cols-2 items-center">

            <div>

              <img
                src={lab1}
                alt=""
                className="rounded-[32px] shadow-2xl"
              />

            </div>

            <div className="space-y-6">

              <h2 className="text-3xl font-black text-slate-800">

                Precision. Accuracy. Trust.

              </h2>

              <p className="text-slate-600 leading-8">

                Our laboratory is equipped with modern diagnostic instruments
                capable of delivering highly accurate reports for routine and
                specialized investigations.

              </p>

              <div className="grid gap-5">

                <div className="flex gap-4">

                  <FiCheckCircle className="mt-1 text-2xl text-primary" />

                  <div>

                    <h3 className="font-bold text-lg">

                      Highly Accurate Reports

                    </h3>

                    <p className="text-slate-500">

                      Automated machines ensure precise diagnostic results.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <FiClock className="mt-1 text-2xl text-primary" />

                  <div>

                    <h3 className="font-bold text-lg">

                      Fast Report Delivery

                    </h3>

                    <p className="text-slate-500">

                      Same-day reporting available for most investigations.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <FiShield className="mt-1 text-2xl text-primary" />

                  <div>

                    <h3 className="font-bold text-lg">

                      Quality Assurance

                    </h3>

                    <p className="text-slate-500">

                      International quality standards maintained throughout the
                      testing process.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="bg-white section-padding">

        <div className="section-container">

         

          <div className="mt-14 grid gap-7 md:grid-cols-2">

            <img
              src={lab2}
              className="rounded-3xl shadow-xl transition hover:scale-[1.02]"
              alt=""
            />

            <img
              src={lab3}
              className="rounded-3xl shadow-xl transition hover:scale-[1.02]"
              alt=""
            />

            <img
              src={lab4}
              className="rounded-3xl shadow-xl transition hover:scale-[1.02]"
              alt=""
            />

            <div className="rounded-3xl bg-primary p-10 text-white flex flex-col justify-center">

              <FiAward className="text-6xl mb-6" />

              <h3 className="text-3xl font-black">

                Advanced Technology

              </h3>

              <p className="mt-4 text-slate-200 leading-8">

                Our laboratory uses modern automated diagnostic equipment to
                provide reliable and accurate medical reports with minimal
                turnaround time.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Diagnostic;