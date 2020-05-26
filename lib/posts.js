import path from 'path'
// import fs from 'fs'
// import matter from 'gray-matter'
import fetch from 'node-fetch'

const postsDir = path.join(process.cwd(), 'posts')

export async function getPostsData() {
  //   const fileNames = fs.readdirSync(postsDir)
  //   const postsData = fileNames.map((fileName) => {
  //     const id = fileName.replace(/\.md$/, '')
  //     const fullPath = path.join(postsDir, fileName)
  //     const fileContents = fs.readFileSync(fullPath, 'utf-8')
  //     const matterResult = matter(fileContents)
  //     return {
  //       id,
  //       ...matterResult.data,
  //     }
  //   })

  const data = await fetch('https://www.v2ex.com/api/topics/latest.json')
  return data
}
