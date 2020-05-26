import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'
import styled from 'styled-components'
import { getPostsData } from '../lib/posts'
const PostItem = styled.div`
  font-size: 16px;
  color: red;
`

export default function Home({ items }) {
  return (
    <div>
      {items.map((item) => (
        <PostItem key={item.id}>
          <div>
            <Link href={`/posts/${item.id}`} data={item.content}>
              {item.title}
            </Link>
          </div>
        </PostItem>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://www.v2ex.com/api/topics/latest.json')
  const items = await data.json()
  return {
    props: {
      items,
    },
  }
}
