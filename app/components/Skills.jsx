const cards = [
  {
    icon: 'fa-solid fa-code',
    role: 'Full Stack Development',
    details: [
      { label: 'Fundamentals', value: 'HTML5, CSS3 and JavaScript' },
      { label: 'Frontend', value: 'React.js, Next.js, Tailwind CSS, Material UI' },
      { label: 'Backend', value: 'Node.js, Express.js, REST APIs, Socket.io' },
      { label: 'Database', value: 'MongoDB, PostgreSQL' },
    ],
  },
  {
    icon: 'fa-solid fa-laptop',
    role: 'Web Designer',
    years: '2 Years',
    desc: 'I create modern and clean website UI designs.',
  },
  {
    icon: 'fa-solid fa-database',
    role: 'Backend Basics',
    years: '1 Year',
    desc: 'I work with databases and backend systems.',
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    role: 'Responsive Design',
    years: '2 Years',
    desc: 'I make websites mobile-friendly and responsive.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-[10%] py-32">
      <h1 className="text-center text-5xl font-bold mb-12">Skills</h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl w-full">
          {cards.map((card) => (
            <div
              key={card.role}
              className="p-8 border-2 border-black rounded-[2rem] cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1.5 group"
            >
              <i className={`${card.icon} text-3xl mb-4 block`} />
              <span className="text-xl font-semibold gradient-text block mb-2">
                {card.role}
              </span>

              {card.years && (
                <h3 className="text-2xl font-bold mb-2">{card.years}</h3>
              )}

              {card.desc && (
                <p className="text-sm leading-relaxed opacity-80">{card.desc}</p>
              )}

              {card.details && (
                <ul className="text-sm leading-relaxed opacity-80 space-y-1 mt-1">
                  {card.details.map((d) => (
                    <li key={d.label}>
                      <span className="font-semibold">{d.label}:</span> {d.value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}