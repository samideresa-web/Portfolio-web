import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="min-h-screen px-[10%] py-32 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Profile Image */}
        <Image
          src="/image/sami.jpg"
          alt="Samuel Deresa"
          width={350}
          height={350}
          className="w-[220px] md:w-[350px] rounded-full object-cover shadow-xl"
        />

        {/* Info */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium">Hello, I'm</h3>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Samuel Deresa Segni</h1>
            <span className="text-xl md:text-2xl gradient-text font-medium">
              I am a Full-Stack Developer, AI Agent-Based System Developer,
              Cybersecurity Penetration Tester, experienced industry-based study,
              and behavioral cybersecurity researcher.I enjoy turning ideas into efficient, scalable, and visually
              appealing web solutions — from pixel-perfect frontends to robust
              backend systems with clean REST APIs.
          
          
              I am a fast learner who thrives on challenges and is always
              looking to grow as a developer. Every project is a chance to write
              better code and create better experiences.
            </span>
            
             
          </div>
        </div>

      </div>
    </section>
  )
}