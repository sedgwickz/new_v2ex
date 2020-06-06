import cheerio from 'cheerio'
import fetch from 'node-fetch'

export const getPost = async (id, pageNum) => {
  const url = `https://v2ex.com/t/${id}?p=${pageNum}`

  const res = await fetch(url)
  const text = await res.text()
  const $ = cheerio.load(text)
  const title = $('h1').text() || '该板块内容V2EX设置为需要登录才能浏览😥'
  const content = $('.topic_content').html() || ''
  const author = $('.gray a').text() || ''
  const reply_count = $('.cell .gray').text() || ''
  const pages = []
  $('.cell+ .cell td > a').each((_, node) => {
    pages.push({
      number: $(node).text(),
      isCurrent: $(node).hasClass('page_current') ? true : false,
    })
  })
  const replies = []
  $('#Main .cell').each((_, node) => {
    const avatar_url = $(node).find('.avatar').attr('src') || ''
    const author = $(node).find('.dark').text() || ''
    const ago = $(node).find('.ago').text() || ''
    const content = $(node).find('.reply_content').html()
    const no = $(node).find('.no').text() || ''

    author &&
      replies.push({
        avatar_url: avatar_url,
        author: author,
        ago: ago,
        content: content && content.replace(/\<pre\>|\<\/pre\>/g, ''),
        no: no,
      })
  })
  const post = {
    title: title,
    author: author,
    content: content && content.replace(/\<pre\>|\<\/pre\>/g, ''),
    replies: replies,
    reply_count: reply_count,
    pages: pages,
  }

  return post
}
