import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'

const hospitalImages = [
  'https://i.ibb.co/dJmpw9Qk/Lab-Aid-Hospital-Konabari-Gallery-image-1.jpg',
  'https://i.ibb.co/twdDvVZs/Lab-Aid-Hospital-Konabari-Gallery-image-2.jpg',
  'https://i.ibb.co/F4ssYCxy/Lab-Aid-Hospital-Konabari-Gallery-image-3.jpg',
  'https://i.ibb.co/M5WNpjpQ/Lab-Aid-Hospital-Konabari-Gallery-image-4.jpg',
  'https://i.ibb.co/rKpCKhNj/Lab-Aid-Hospital-Konabari-Gallery-image-5.jpg',
  'https://i.ibb.co/9HDsFxz3/Lab-Aid-Hospital-Konabari-Gallery-image-6.jpg',
  'https://i.ibb.co/jkh2ZmyT/Lab-Aid-Hospital-Konabari-Gallery-image-7.jpg',
  'https://i.ibb.co/VWpnmLzc/Lab-Aid-Hospital-Konabari-Gallery-image-8.jpg',
  'https://i.ibb.co/YTWSHNRH/Lab-Aid-Hospital-Konabari-Gallery-image-9.jpg',
  'https://i.ibb.co/RppShBnb/Lab-Aid-Hospital-Konabari-Gallery-image-10.jpg',
  'https://i.ibb.co/99Khs7dk/Lab-Aid-Hospital-Konabari-Gallery-image-11.jpg',
  'https://i.ibb.co/VcC7yq02/Lab-Aid-Hospital-Konabari-Gallery-image-12.jpg',
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="section-padding bg-white" id="gallery">
      <div className="section-container">
        <SectionHeader
          eyebrow="Gallery"
          title="Hospital photos and facilities"
          text="Real hospital photos showing our helpful staff, celebrations, reception desk, and active patient care areas."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hospitalImages.map((src, index) => {
            const photoNumber = String(index + 1).padStart(2, '0')

            return (
              <article
                key={src + index}
                onClick={() => setSelectedImage(src)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[1.75rem] shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  alt={`Hospital facility and staff view ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  decoding="async"
                  loading="lazy"
                  src={src}
                  width={1200}
                  height={900}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute left-4 top-4 rounded-xl border border-white/40 bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  Photo {photoNumber}
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              alt="Enlarged hospital view"
              className="max-h-[85vh] w-full object-contain"
              decoding="async"
              src={selectedImage}
              width={1600}
              height={900}
            />
            <button
              aria-label="Close gallery preview"
              className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-black hover:bg-white"
              onClick={() => setSelectedImage(null)}
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
