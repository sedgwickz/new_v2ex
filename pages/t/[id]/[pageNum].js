import Post from '../[id]'
import { getPost } from '../../../lib/post'

export default (props) => {
  const { id, title, content, author, replies, reply_count, pages } = props

  return (
    <Post
      title={title}
      id={id}
      content={content}
      author={author}
      reply_count={reply_count}
      replies={replies}
      pages={pages}
    />
  )
}

export async function getServerSideProps(ctx) {
  const { id, pageNum } = ctx.params
  const post = await getPost(id, pageNum)
  return {
    props: { ...post, id: id },
  }
}
