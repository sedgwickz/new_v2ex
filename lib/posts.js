import fetch from 'node-fetch'
import cheerio from 'cheerio'
import _ from 'lodash'
import NodeCache from 'node-cache'

export const getPosts = async (name = 'all') => {
  const url = `https://v2ex.com/?tab=${name}`
  // const params = {
  //   url: url,
  // }
  // const res = await fetch('http://localhost:5000/proxy', {
  //   method: 'post',
  //   body: JSON.stringify(params),
  //   headers: { 'Content-Type': 'application/json' },
  // })

  // const cache = new NodeCache()
  // console.log(cache.getStats())
  // const cachePosts = cache.get(name)
  // if (cachePosts) {
  //   console.log('get from cache')
  //   return cachePosts
  //   //console.log(cache.set(name, text))
  // }
  const res = await fetch(url)
  const text = await res.text()
  const $ = cheerio.load(text)

  const posts = []
  $('.item').each((_, node) => {
    const title = $(node).find('.topic-link').text() || ''
    const title_id = $(node).find('.topic-link').attr('href') || ''
    const comment_count = $(node).find('.count_livid').text() || 0
    const avatar_url = $(node).find('.avatar').attr('src') || ''
    const node_name = $(node).find('.node').text() || ''
    const node_id = $(node).find('.node').attr('href') || 'all'
    const author = $(node).find('strong a').text() || ''
    posts.push({
      title: title,
      title_id: title_id.replace(/#.*/, ''),
      author: author,
      node_id: node_id,
      node_name: node_name,
      comment_count: comment_count,
      avatar_url: avatar_url,
    })
  })

  //cache.set(name, posts)
  //console.log(cache.getStats())
  return posts
}
