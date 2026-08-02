import md1 from "../assets/file.jpg";
import md2 from "../assets/MD2.jpg";

export default function ManagingDirectors() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">

        <div className="text-center mb-16">
          <span className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-primary">
            Leadership
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            ব্যবস্থাপনা পরিচালকের বাণী
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-slate-600">
            কোনাবাড়ী ল্যাবএইড হাসপাতালের প্রতিষ্ঠাতা ও ব্যবস্থাপনা
            কর্তৃপক্ষের পক্ষ থেকে রোগীদের উদ্দেশ্যে শুভেচ্ছা বার্তা।
          </p>
        </div>

        {/* MD */}

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <img
              src={md1}
              alt="Managing Director"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>

            <h3 className="text-3xl font-black text-primary">
              মোঃ সোহেল রানা
            </h3>

            <p className="mt-2 text-orange-500 font-bold">
              ব্যবস্থাপনা পরিচালক
            </p>

            <p className="mt-1 font-medium text-slate-600">
              বিবিএ (অনার্স), এমবিএ (এইচ.আর.এম)
            </p>

            <div className="mt-8 space-y-5 leading-8 text-slate-700">

              <p>
                প্রাণ প্রিয় গাজীপুরবাসী, আপনাদের সবার প্রতি রইল আমার সালাম,
                শ্রদ্ধা ও ভালোবাসা।
              </p>

              <p>
                কোনাবাড়ী ল্যাবএইড হাসপাতালের পক্ষ থেকে আপনাদের সু-চিকিৎসা ও
                সুস্থতা কামনা করছি। সুস্থতা মানুষের সবচেয়ে বড় সম্পদ।
              </p>

              <p>
                আমাদের হাসপাতালে আধুনিক বিদেশী প্রযুক্তির মাধ্যমে সঠিক ও
                নির্ভুল রোগ নির্ণয় এবং অভিজ্ঞ বিশেষজ্ঞ চিকিৎসকদের মাধ্যমে
                সর্বোচ্চ মানের চিকিৎসাসেবা প্রদান করা হয়।
              </p>

              <p>
                অতীতের মতো ভবিষ্যতেও আপনাদের আস্থা, সহযোগিতা ও ভালোবাসা নিয়ে
                আমরা সর্বোচ্চ সেবা দিতে প্রতিশ্রুতিবদ্ধ।
              </p>

            </div>

            <div className="mt-8 rounded-2xl bg-teal-50 p-6">

              <p className="font-bold text-primary">
                মোবাইল: 01916546817
              </p>

            </div>

          </div>

        </div>

        {/* Assistant MD */}

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">

          <div className="order-2 lg:order-1">

            <h3 className="text-3xl font-black text-primary">
              মোঃ শামিম রানা
            </h3>

            <p className="mt-2 text-orange-500 font-bold">
              সহকারী ব্যবস্থাপনা পরিচালক
            </p>

            <div className="mt-8 space-y-5 leading-8 text-slate-700">

              <p>
                রোগীদের নিরাপদ, আধুনিক ও মানবিক চিকিৎসাসেবা নিশ্চিত করাই
                আমাদের মূল লক্ষ্য।
              </p>

              <p>
                দক্ষ চিকিৎসক, আধুনিক প্রযুক্তি এবং আন্তরিক সেবার মাধ্যমে
                কোনাবাড়ী ল্যাবএইড হাসপাতাল সর্বদা আপনাদের পাশে রয়েছে।
              </p>

              <p>
                আমরা বিশ্বাস করি, রোগীর আস্থা ও সন্তুষ্টিই একটি হাসপাতালের
                সবচেয়ে বড় অর্জন।
              </p>

            </div>

            <div className="mt-8 rounded-2xl bg-orange-50 p-6">

              <p className="font-bold text-orange-600">
                মোবাইল: ০১৯১০-১৮০৪৩০
              </p>

            </div>

          </div>

          <div className="order-1 lg:order-2">

            <img
              src={md2}
              alt="Assistant Managing Director"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}