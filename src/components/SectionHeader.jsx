function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'mx-auto text-center'

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <p className="mb-3 inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-poppins text-3xl font-black leading-tight tracking-tight text-dark md:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  )
}

export default SectionHeader
