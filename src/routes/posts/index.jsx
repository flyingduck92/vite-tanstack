import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  const postId = '111'
  return (
    <div className='p-2'>
      <p>Hello "/posts/"!</p>
      <Link className='font-bold text-purple-600 hover:text-purple-300' to='/posts/$postId' params={{ postId }}>
        111
      </Link>
    </div>
  )
}
