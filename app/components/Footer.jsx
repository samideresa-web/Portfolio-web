export default function Footer() {
  const links = ['about', 'experience', 'projects', 'contact']

  return (
    <footer className="px-[10%] py-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
      <ul className="flex gap-6 flex-wrap justify-center">
        {links.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-gray-600 text-sm font-medium hover:text-black transition-colors duration-300"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-gray-500 text-sm">© 2026 Samuel Deresa | All Rights Reserved</p>
    </footer>
  )
}
