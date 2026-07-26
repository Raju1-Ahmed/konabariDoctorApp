import { latestNews } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function News() {
  return (
    <section className="bg-white section-padding" id="news">
      <div className="section-container">
        <SectionHeader
          eyebrow="Latest News"
          title="Hospital news and notices"
          text="The admin panel can publish doctor schedules, health camps, notices and career updates."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {latestNews.map((news) => (
            <article className="rounded-[1.75rem] border border-slate-100 bg-light p-6" key={news.title}>
              <p className="text-sm font-black uppercase tracking-wider text-primary">{news.date}</p>
              <h3 className="mt-4 font-poppins text-xl font-black leading-tight text-dark">{news.title}</h3>
              <a className="mt-6 inline-flex font-black text-accent" href="/#news">
                Read News →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
