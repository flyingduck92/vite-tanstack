import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId/edit')({
  component: PostEditPage,
})

function PostEditPage() {
  const { postId } = Route.useParams()

  return (
    <>
      <div className='p-2'>
        <p>Back to:
          <Link className='font-bold text-purple-600 hover:text-purple-300' to='/posts/$postId' params={{ postId }}>{' '}
            Post {postId}
          </Link>
        </p>
        <p>Hello "/posts/{postId}/edit" page!</p>
      </div>
    </>
  )
}
