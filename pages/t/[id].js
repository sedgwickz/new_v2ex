import Link from 'next/link'
import { getPost } from '../../lib/post'
import styled from 'styled-components'
import Head from 'next/head'

const PostComponent = styled.article`
  .title {
    h1 {
      font-size: 1.8rem;
      font-weight: 500;
      margin: 0;
    }

    &::after {
      display: block;
      content: '';
      background-color: #eee;
      height: 1px;
      margin: 0.5rem -0.8rem;
    }
  }
`
const Comments = styled.div`
  margin: 1rem 0;
  .comment {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    img {
      border-radius: 0.3rem;
      align-self: flex-start;
      width: 48px;
      height: 48px;
      background: #eee;
    }

    .middle {
      flex: 1 1 auto;
      margin: 0 1rem;

      .ago {
        font-size: 12px;
        margin: 0 8px;
        color: #ccc;
      }

      .content {
        margin-top: 6px;
      }
    }

    .no {
      align-self: flex-start;
      color: #ccc;
      font-size: 10px;
      span {
        padding: 3px 8px;
        border-radius: 12px;
        background: #f0f0f0;
      }
    }
  }

  .item::after {
    display: block;
    content: '';
    background-color: #eee;
    height: 1px;
    margin: 0.5rem -0.8rem;
  }
`

function createMarkup(content) {
  return { __html: content }
}

export default function Post({ title, content, author, replies }) {
  return (
    <>
      <Head>
        <title> {title} - V2EX</title>
      </Head>
      <PostComponent className="card">
        <div className="title">
          <h1>{title}</h1>
          <Link href="/member/[id]" as={`/member/${author}`}>
            <a>{author}</a>
          </Link>
        </div>
        <div dangerouslySetInnerHTML={createMarkup(`${content}`)} />
      </PostComponent>
      <Comments className="card">
        {replies.map((r) => {
          return (
            <div className="item" key={r.no}>
              <div className="comment">
                <img src={r.avatar_url} />
                <div className="middle">
                  <span>
                    <Link href="/member/[id]" as={`/member/${r.author}`}>
                      <a>{r.author}</a>
                    </Link>
                    <span className="ago">{r.ago}</span>
                  </span>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={createMarkup(`${r.content}`)}
                  />
                </div>
                <div className="no">
                  <span>{r.no}</span>
                </div>
              </div>
            </div>
          )
        })}
      </Comments>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const post = await getPost(ctx.params.id)
  return {
    props: { ...post },
  }
}
