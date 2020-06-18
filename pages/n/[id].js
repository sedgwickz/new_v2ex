import Home from '../index'
import posts from '../../data/list.json'

export default function Node({ posts, current }) {
  return <Home posts={posts} current={current} />
}

export async function getServerSideProps(ctx) {
  return { props: { posts: posts[ctx.params.id], current: `${ctx.params.id}` } }
}
