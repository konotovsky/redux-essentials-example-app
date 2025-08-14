import { useAppSelector } from '@/app/hooks'
import { TimeAgo } from '@/components/TimeAgo'
import { Link, useParams } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { selectPostById } from './postsSlice'

export const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useAppSelector((state) => selectPostById(state, postId!))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content}</p>

        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
