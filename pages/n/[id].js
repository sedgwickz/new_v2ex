import Link from 'next/link'
import styled from 'styled-components'
import Home from '../index'
import { getPosts } from '../../lib/posts'

export default function Node({ posts, current }) {
  return <Home posts={posts} current={current} />
}

export async function getServerSideProps(ctx) {
  const posts = await getPosts(`${ctx.params.id}`)
  return { props: { posts: posts, current: `${ctx.params.id}` } }
}
