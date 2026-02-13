import { Link } from '@tanstack/react-router'

function Navigation({ nav }) {
  return (
    <nav className="flex gap-2">
      {
        nav.map(({ to, label }) => (
          <Link key={label} to={to}
            className='hover:font-bold hover:text-purple-300 transition px-3 py-2 leading-none'
            activeProps={{ className: 'font-bold text-purple-600' }}
            inactiveProps={{ className: 'font-normal text-white' }}
          >
            {label}
          </Link>
        ))
      }
    </nav>
  )
}

export default Navigation