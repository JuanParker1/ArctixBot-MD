import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Not found'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
π *π§ππ§ππ:* ${title}
π *π¨π₯π:* ${url}
π *πππ¦ππ₯ππ£π§ππ’π‘:* ${description}
β²οΈ *Published:* ${publishedTime}
β *Duration:* ${durationH}
ποΈ *Views:* ${viewH}
  `.trim(), author, thumbnail, url, 'Go to YouTube', null, null, [
    ['SONG', `${usedPrefix}yta ${url} yes`],
    ['VIDEO', `${usedPrefix}ytv ${url} yes`],
    ['Youtube Searchπ', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler

