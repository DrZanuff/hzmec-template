import { InstagramPost } from './instaFeed.types'
// https://github.com/orsifrancesco/instagram-without-api-node
const { iwa } = require('instagram-without-api-node')

const _cookie = process.env.INSTAGRAM_COOKIE
const _userAgent = process.env.INSTAGRAM_USER_AGENT
const _xIgAppId = process.env.INSTAGRAM_APP_ID

export async function getInstagramData() {
  // get the latest 12 feeds from an account (example https://www.instagram.com/orsifrancesco/)

  const responseIwa = await iwa({
    headers: {
      cookie: _cookie,
      'user-agent': _userAgent,
      'x-ig-app-id': _xIgAppId,
    },

    base64images: true, // <!-- optional, but without it, you will be not able to store/show images
    maxImages: 6, // <!-- optional, 12 is the max number
    file: 'instagram-cache.json', // <!-- optional, instagram-cache.json is by default
    pretty: true, // <!-- optional, prettyfy json true/false
    time: 3600, // <!-- optional, reload contents after 3600 seconds by default

    id: 'hzmec', // <!-- id is required
  })

  const insgragramFeed = responseIwa as InstagramPost[]

  return insgragramFeed
}
