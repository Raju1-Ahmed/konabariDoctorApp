import md1 from '../assets/file.jpg'
import md2 from '../assets/MD2.jpg'

function ManagingDirectors() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-primary">Leadership</span>
          <h2 className="mt-4 text-4xl font-black text-slate-900">ব্যবস্থাপনা পর্ষদের বার্তা</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Konabari Lab Aid Hospital-এর নেতৃত্ব দল রোগীদের জন্য নিরাপদ, আধুনিক এবং মানবিক স্বাস্থ্যসেবা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              alt="Managing Director"
              className="rounded-3xl shadow-2xl"
              decoding="async"
              loading="lazy"
              src={md1}
            />
          </div>

          <div>
            <h3 className="text-3xl font-black text-primary">মোঃ সোহেল রানা</h3>
            <p className="mt-2 font-bold text-orange-500">ব্যবস্থাপনা পরিচালক</p>
            <p className="mt-1 font-medium text-slate-600">বিবিএ (অনার্স), এমবিএ (এইচ.আর.এম)</p>

            <div className="mt-8 space-y-5 leading-8 text-slate-700">
              <p>আমাদের লক্ষ্য হলো উন্নত প্রযুক্তি, দক্ষ চিকিৎসক এবং স্বচ্ছ ব্যবস্থাপনার মাধ্যমে রোগীদের সেরা সেবা দেওয়া।</p>
              <p>হাসপাতালের প্রতিটি বিভাগে আমরা মানসম্মত, নিরাপদ এবং দ্রুত সেবা পৌঁছে দিতে কাজ করছি।</p>
              <p>রোগীর আস্থা, সন্তুষ্টি এবং মানবিক যত্নই আমাদের প্রতিষ্ঠানের মূল শক্তি।</p>
            </div>

            <div className="mt-8 rounded-2xl bg-teal-50 p-6">
              <p className="font-bold text-primary">Mobile: 01916546817</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-black text-primary">মোঃ শামীম রানা</h3>
            <p className="mt-2 font-bold text-orange-500">সহকারী ব্যবস্থাপনা পরিচালক</p>

            <div className="mt-8 space-y-5 leading-8 text-slate-700">
              <p>রোগীদের আরাম, নিরাপত্তা এবং দ্রুত সেবা নিশ্চিত করাই আমাদের প্রতিদিনের অগ্রাধিকার।</p>
              <p>ডিজিটাল সিস্টেম, পরিষ্কার পরিবেশ এবং দক্ষ টিমওয়ার্কের মাধ্যমে আমরা হাসপাতালকে আরও উন্নত করছি।</p>
              <p>রোগী ও পরিবারের আস্থা ধরে রাখতে আমরা সবসময় সচেষ্ট।</p>
            </div>

            <div className="mt-8 rounded-2xl bg-orange-50 p-6">
              <p className="font-bold text-orange-600">Mobile: 01911018430</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              alt="Assistant Managing Director"
              className="rounded-3xl shadow-2xl"
              decoding="async"
              loading="lazy"
              src={md2}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManagingDirectors
