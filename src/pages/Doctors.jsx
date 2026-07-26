import { useState } from "react";
import doctorsData from "../data/DoctorsData.json";

export default function Doctors() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Doctors Schedule
      </h1>

      {/* Day Tabs */}

      <div className="flex flex-wrap justify-center gap-3 mb-10">

        {doctorsData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-5 py-3 rounded-lg font-semibold transition

              ${
                activeDay === index
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 hover:bg-teal-100"
              }

            `}
          >
            {day.day}
          </button>
        ))}

      </div>

      {/* Current Day */}

      <h2 className="text-2xl font-bold mb-6 text-teal-700">
        {doctorsData[activeDay].day}
      </h2>

      {/* Doctors */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {doctorsData[activeDay].doctors.map((doctor) => (

          <div
            key={doctor.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
          >

            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold">
                {doctor.department}
              </span>

              <h3 className="mt-3 text-xl font-bold">
                {doctor.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {doctor.title}
              </p>

              <p className="mt-3 text-sm">
                <strong>Degrees:</strong>
                <br />
                {doctor.degrees}
              </p>

              <p className="mt-3 text-sm">
                <strong>Designation:</strong>
                <br />
                {doctor.designation}
              </p>

              <p className="mt-3 font-semibold text-teal-600">
                🕒 {doctor.chamberTime}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}