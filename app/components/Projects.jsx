const projects = [
  {
    img: '/image/sami.jpg',
    title: 'Portfolio Website',
    desc: 'Personal portfolio website using HTML CSS JavaScript.',
    demo: '#',
    github: 'https://github.com',
  },
  {
    img: '/image/ali photo.jpeg',
    title: 'E-commerce Website',
    desc: 'Online shopping website UI with responsive design.',
    demo: '#',
    github: 'https://github.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-[10%] py-32">
      <h1 className="text-center text-5xl font-bold mb-12">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-8 border-2 border-black rounded-[2rem] text-center transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-2.5"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full rounded-2xl mb-4 object-cover h-48"
            />
            <h2 className="text-xl font-bold mb-3">{project.title}</h2>
            <p className="text-sm opacity-75 mb-5 leading-relaxed">{project.desc}</p>

            <div className="flex justify-center gap-3">
              <a
                href={project.demo}
                className="px-5 py-2 border-2 border-current rounded-full text-sm font-medium transition-all duration-300 hover:gradient-bg hover:border-transparent hover:text-white"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border-2 border-current rounded-full text-sm font-medium transition-all duration-300"
              >
                <i className="fa-brands fa-github mr-1" /> Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
