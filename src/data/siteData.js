export const contactInfo = {
  emergency: '01916546817',
  email: 'konabarilabaidhospital@gmail.com',
  address: 'Konabari, Gazipur, Bangladesh',
  hours: 'Open 24 Hours · Emergency Always Available',
  facebook: 'https://www.facebook.com/Konabari.Labaid/',
  whatsapp: 'https://wa.me/8801916546817',
}

export const seoPages = {
  home: {
    title: 'Konabari Lab Aid Hospital | Hospital in Konabari, Gazipur',
    description:
      'Konabari Lab Aid Hospital in Konabari, Gazipur offers 24/7 emergency care, specialist doctors, diagnostic services, ICU support and online appointment booking.',
    keywords: [
      'Konabari Lab Aid Hospital',
      'hospital in Konabari',
      'hospital in Gazipur',
      'best hospital in Gazipur',
      '24/7 emergency hospital',
      'doctor appointment hospital',
      'diagnostic center in Gazipur',
      'ICU hospital in Gazipur',
      'emergency ambulance service',
      'online appointment booking',
      'মেডিসিন ডাক্তার গাজীপুর',
      'গাইনী ডাক্তার কনাবাড়ি',
      'ডায়াগনস্টিক সেন্টার গাজীপুর',
      '২৪ ঘণ্টা হাসপাতাল',
    ],
  },
  about: {
    title: 'About | Konabari Lab Aid Hospital',
    description:
      'Learn about Konabari Lab Aid Hospital, its modern facilities, experienced doctors, emergency support and patient-focused healthcare.',
    keywords: [
      'about Konabari Lab Aid Hospital',
      'hospital profile Gazipur',
      'modern healthcare hospital',
      'experienced doctors',
      'patient focused hospital',
    ],
  },
  doctors: {
    title: 'Doctors | Konabari Lab Aid Hospital',
    description:
      'View specialist doctors, qualifications, department information and chamber schedule at Konabari Lab Aid Hospital.',
    keywords: [
      'doctor list Gazipur',
      'specialist doctors',
      'doctor chamber time',
      'doctor appointment',
      'hospital doctors Konabari',
    ],
  },
  appointment: {
    title: 'Appointment | Konabari Lab Aid Hospital',
    description:
      'Book an appointment at Konabari Lab Aid Hospital with selected doctor, department, day and chamber time.',
    keywords: [
      'online appointment',
      'book doctor appointment',
      'hospital appointment form',
      'doctor schedule booking',
      'appointment with specialist doctor',
    ],
  },
  contact: {
    title: 'Contact | Konabari Lab Aid Hospital',
    description:
      'Contact Konabari Lab Aid Hospital for address, phone, email, opening hours, emergency number and Google Map location.',
    keywords: [
      'hospital contact Gazipur',
      'emergency hotline',
      'hospital address',
      'WhatsApp hospital contact',
      'Google Map hospital',
    ],
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: 'Konabari Lab Aid Hospital',
  url: 'https://konabarilabaidhospital.com',
  telephone: `+88${contactInfo.emergency}`,
  email: contactInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Konabari',
    addressLocality: 'Gazipur',
    addressCountry: 'BD',
  },
  areaServed: ['Konabari', 'Gazipur', 'Bangladesh'],
  medicalSpecialty: [
    'Emergency Medicine',
    'Internal Medicine',
    'Cardiology',
    'Gynecology',
    'Pediatrics',
    'Orthopedics',
    'Neurology',
    'Surgery',
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  sameAs: [contactInfo.facebook, contactInfo.whatsapp],
}

export const faqItems = [
  {
    question: 'Konabari Lab Aid Hospital ki 24/7 emergency service dey?',
    answer: 'Haan, hospital-ti 24/7 emergency care, emergency hotline ebong ambulance support provide kore.',
  },
  {
    question: 'Online appointment booking available ache?',
    answer: 'Haan, website theke doctor select kore appointment request pathano jay.',
  },
  {
    question: 'Kuno specific doctor chamber time dekha jay?',
    answer: 'Haan, doctor card ebong appointment form-e chamber time, day ebong department dekhano hoy.',
  },
  {
    question: 'Hospital-e ki diagnostic lab service ache?',
    answer: 'Haan, diagnostic services, lab support ebong health package information website-e available.',
  },
]

export const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/about' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Departments', href: '/#departments' },
  { label: 'Appointment', href: '/appointment' },
  { label: 'Facilities', href: '/#facilities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const heroFeatures = ['24/7 Emergency', 'Expert Doctors', 'Modern Lab', 'ICU Support']

export const quickServices = [
  {
    title: 'Find Doctor',
    description: 'Search specialists by department and schedule.',
  },
  {
    title: 'Book Appointment',
    description: 'Request appointments without waiting on phone calls.',
  },
  {
    title: 'Diagnostic Services',
    description: 'View lab, imaging and test service information.',
  },
  {
    title: 'Emergency Ambulance',
    description: 'One-tap emergency call and ambulance support.',
  },
  {
    title: 'Health Packages',
    description: 'Promote checkup packages and seasonal offers.',
  },
  {
    title: 'Contact',
    description: 'Address, map, phone, email and opening hours.',
  },
]

export const departments = [
  'Medicine',
  'Cardiology',
  'Gynecology',
  'Orthopedics',
  'ENT',
  'Skin',
  'Diabetes',
  'Pediatrics',
  'Neurology',
  'Surgery',
]

export const doctors = [
  {
    name: 'Dr. Farhana Rahman',
    qualification: 'MBBS, FCPS',
    department: 'Gynecology',
    experience: '12 Years Experience',
    todayChamber: 'Today · 5:00 PM - 9:00 PM',
  },
  {
    name: 'Dr. Mahmud Hasan',
    qualification: 'MBBS, MD Medicine',
    department: 'Medicine',
    experience: '15 Years Experience',
    todayChamber: 'Today · 4:00 PM - 8:00 PM',
  },
  {
    name: 'Dr. Tanvir Ahmed',
    qualification: 'MBBS, DCH',
    department: 'Pediatrics',
    experience: '9 Years Experience',
    todayChamber: 'Today · 6:00 PM - 10:00 PM',
  },
  {
    name: 'Dr. Nusrat Jahan',
    qualification: 'MBBS, MS Surgery',
    department: 'Surgery',
    experience: '11 Years Experience',
    todayChamber: 'Today · 3:00 PM - 7:00 PM',
  },
]

export const whyChooseUs = [
  'Experienced Doctors',
  'Modern Equipment',
  'Emergency Service',
  'ICU',
  'Pharmacy',
  'Digital Lab',
  'Comfortable Cabin',
  'Affordable Cost',
]

export const statistics = [
  { label: 'Doctors', value: 50, suffix: '+' },
  { label: 'Patients', value: 25000, suffix: '+' },
  { label: 'Departments', value: 15, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
]

export const facilities = [
  'ICU',
  'NICU',
  'Operation Theatre',
  'Pharmacy',
  'Lab',
  'Ambulance',
  'Cabin',
  'Parking',
]

export const testimonials = [
  {
    name: 'Rafiqul Islam',
    text: 'Emergency team responded very quickly and guided our family with care.',
  },
  {
    name: 'Mst. Sharmeen Akter',
    text: 'Doctor schedule and appointment information online would make service easier.',
  },
  {
    name: 'Arif Hossain',
    text: 'Clean environment, helpful staff and reliable diagnostic support.',
  },
]

export const galleryItems = [
  'Hospital Building',
  'Reception Area',
  'Digital Lab',
  'Doctor Chamber',
  'Patient Cabin',
  'Operation Theatre',
]

export const latestNews = [
  {
    title: 'Free diabetes screening camp announced',
    date: '12 July 2026',
  },
  {
    title: 'New specialist doctor schedule published',
    date: '10 July 2026',
  },
  {
    title: 'Emergency hotline available 24/7',
    date: '08 July 2026',
  },
]
