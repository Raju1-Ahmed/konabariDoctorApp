import { Helmet } from 'react-helmet-async'
import DoctorsSchedule from '../components/DoctorsSchedule.jsx'

function Doctors() {
  return (
    <main className="bg-light py-12 md:py-16">
      <Helmet>
        <html lang="bn-BD" />
        <title>ডাক্তারগণ | কনাবাড়ী ল্যাবএইড হাসপাতাল</title>
        <meta
          name="description"
          content="কনাবাড়ী ল্যাবএইড হাসপাতালের ডাক্তারদের সময়সূচি, বিভাগ, যোগ্যতা এবং আজকের চেম্বার সময় দেখুন।"
        />
      </Helmet>
      <DoctorsSchedule compact />
    </main>
  )
}

export default Doctors
