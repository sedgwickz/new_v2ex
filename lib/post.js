import cheerio from 'cheerio'
import fetch from 'node-fetch'

export const getPost = async (id) => {
  const url = `https://v2ex.com/t/${id}`

  const res = await fetch(url)
  const text = await res.text()
  const $ = cheerio.load(text)

  const title = $('h1').text() || ''
  const content =
    $('.markdown_body')
      .html()
      .replace(/\<pre\>|\<\/pre\>/g, '') || ''
  const author = $('.gray a').text() || ''
  const replies = []
  $('.cell+ .cell').each((_, node) => {
    const avatar_url = $(node).find('.avatar').attr('src') || ''
    const author = $(node).find('.dark').text() || ''
    const ago = $(node).find('.ago').text() || ''
    const content =
      $(node)
        .find('.reply_content')
        .html()
        .replace(/\<pre\>|\<\/pre\>/g, '') || ''
    const no = $(node).find('.no').text() || ''
    replies.push({
      avatar_url: avatar_url,
      author: author,
      ago: ago,
      content: content,
      no: no,
    })
  })

  const post = {
    title: title,
    author: author,
    content: content,
    replies: replies,
  }
  return post
}
