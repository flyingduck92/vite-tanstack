import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId/')({
  component: PostDetailPage,
})

function PostDetailPage() {
  const { postId } = Route.useParams()

  return (
    <>
      <div className='p-2'>
        <p>Back to: <Link className='font-bold text-purple-600 hover:text-purple-300' to='/posts' > Posts</Link></p>
        <p>Hello "/posts/{postId}/" page!</p>
        <Link className='font-bold text-purple-600 hover:text-purple-300' to='edit'>Edit</Link>
      </div>
    </>
  )
}
