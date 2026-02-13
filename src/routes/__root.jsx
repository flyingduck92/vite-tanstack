import Navigation from '@/components/Navigation'
import { createRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRoute({
  component: Root
})

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/posts', label: 'Posts' },
]

function Root() {
  return (
    <main className='min-h-screen m-6'>
      <Navigation nav={nav} />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  )
}