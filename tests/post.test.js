import { getPost, sum } from '../lib/post'

test('get post from https://v2ex/com/t/678748?p=1 ', async () => {
  const post = await getPost(678748, 1)
  expect(post).toBeDefined()
  expect(post.title).toBe('朋友天降横财（拆迁），突然问我现在做什么生意好')
  expect(post.author).toBe('jsgbsj')
  post.replies.map((r, index) => {
    expect(r.no).toBe(`${index + 1}`)
  })
  //console.log(post.replies)
  //expect(post.replies.length).toBe(100)
})

test('get post from https://v2ex/com/t/678748 ', async () => {
  const post = await getPost(678748)
  expect(post).toBeDefined()
  expect(post.title).toBe('朋友天降横财（拆迁），突然问我现在做什么生意好')
  expect(post.author).toBe('jsgbsj')
  //expect(post.replies.length).toBe(100)
})
