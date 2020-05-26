import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Post = styled.a`
  color: red;
`

export default () => (
  <>
    <Post>This is my first post</Post>
    <Link href="/">Back</Link>
  </>
)
