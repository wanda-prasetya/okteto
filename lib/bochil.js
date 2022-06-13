/* eslint-disable no-mixed-spaces-and-tabs */
const axios = require('axios')
const cheerio = require('cheerio')

import { ScraperError, decodeSnapApp } = require ('./utils.js') 
import Form from 'form-data'

export async function instagramdl (url: string): Promise<InstagramDownloader[]> {
  if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url)) {
    throw new ScraperError('Invalid url!!')
  }

  const data = await got
    .post('https://snapinsta.app/action.php', {
      form: {
        url: encodeURI(url),
        action: 'post'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://snapinsta.app',
        referer: 'https://snapinsta.app/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
      }
    })
    .text()
  const params = data.split('))</script>')[0]
    .split('decodeURIComponent(escape(r))}(')[1]
    ?.split(',').map(v => v.replace(/^"/, '')
      .replace(/"$/, '').trim())
  if (!Array.isArray(params) || params.length !== 6) throw new ScraperError(`Can't parse decode parameters!\n${data}`)
  const decode = decodeSnapApp(...params)
  const html = decode?.split('("div_download").innerHTML = "')?.[1]
    .split('"; parent.document.getElementById("hero-section").remove();')[0]
    .split('</style> <section class=')[1].split('"> ')[1]
    ?.split(' </section> ')[0].replace(/\\(\\)?/g, '')
  const $ = cheerio.load(html)
  const results: InstagramDownloader[] = []
  $('.row.download-box > div.col-md-4').each(function () {
    let thumbnail = $(this)
      .find('.download-items__thumb > img[src]')
      .attr('src') as string
    if (!/https?:\/\//i.test(thumbnail)) thumbnail = 'https://snapinsta.app' + thumbnail
    let url = $(this).find('.download-items__btn > a[href]').attr('href')
    if (!/https?:\/\//i.test(url || '')) { url = encodeURI('https://snapinsta.app' + url) }
    if (url) results.push({ thumbnail, url })
  })
  if (!results.length) throw new ScraperError(`Can't download!\n${decode}`)
  return results
}

// export async function instagramdlv2 (url: string): Promise<InstagramDownloaderV2[]> {
//   const headers = {
//     Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//     Host: 'igdownloader.com',
//     Referer: 'https://www.google.com/',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
//   }
//   // const initRes = await got('https://igdownloader.com/', { headers })
//   // const cookie = initRes.headers['set-cookie']?.join('; ')
//   const payload = {
//     link: encodeURI(url),
//     downloader: 'photo'
//   }
//   const data: { error: boolean, html: string } = await got.post('https://igdownloader.com/ajax', {
//     form: payload,
//     headers: {
//       ...headers,
//       Accept: 'application/json, text/javascript, */*; q=0.01',
//       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//       Origin: 'https://igdownloader.com',
//       Referer: 'https://igdownloader.com/',
//       Cookie: 'PHPSESSID=u2npiqgusdpmn1qquvp1ehk527; _ga_ZK84BJGHBW=GS1.1.1651742918.1.1.1651744179.0; _ga=GA1.1.431177399.1651744179; __gads=ID=fe9f7f22482b2fb6-22aee78011d3003b:T=1651744181:RT=1651744181:S=ALNI_MZ3uEDkgqcDjKYEcG5S1wXkj5Xvhw'
//     }
//   }).json()
//   if (data.error) throw new ScraperError('Can\'t download!\n' + data)
//   const $ = cheerio.load(data.html)
//   const results: InstagramDownloaderV2[] = []
//   $('div.post-wrapper').each(function () {
//     const thumbnail = ($(this)
//       .find('img[src]')
//       .attr('src') || $(this).find('div.post').attr('data-src')) as string
//     const url = ($(this).find('a[href]').attr('href') || $(this).find('div.checkbox').attr('data-src')) as string
//     const sourceUrl = $(this).find('div.checkbox').attr('data-src') || url || thumbnail
//     if (thumbnail || url || sourceUrl) results.push({ thumbnail, url, sourceUrl })
//   })
//   return results
// }

export async function instagramdlv2 (
  url: string
): Promise<InstagramDownloaderV2[]> {
  if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url)) {
    throw new ScraperError('Invalid url!!')
  }
  const payload = {
    url: url,
    submit: ' '
  }
  const data = await got
    .post('https://downloadgram.org/', {
      form: payload,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        cookie:
          '_ga=GA1.2.654346005.1642149344; _gid=GA1.2.1562255413.1642149344; _gat_gtag_UA_142480840_1=1; __atuvc=1%7C2; __atuvs=61e135df10258fab000; __gads=ID=b4c9d2019034e5ed-227b64f3e5cf003a:T=1642149344:RT=1642149344:S=ALNI_MbtRULwcpAb_-lCLCSUPN5m5rd54A',
        origin: 'https://downloadgram.org',
        referer: 'https://downloadgram.org/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
      }
    })
    .text()

  const $ = cheerio.load(data)
  let results: InstagramDownloaderV2[] = []
  if ($('#downloadBox > a').length) {
    const temp: {
      thumbnail?: string;
      sourceUrl?: string;
      index: number;
      url?: string;
    }[] = []
    $('#downloadBox > video').each(function (i) {
      const thumbnail = $(this).attr('poster')
      const sourceUrl = $(this).find('source[src]').attr('src')
      if (thumbnail) {
        temp.push({
          thumbnail,
          sourceUrl,
          index: i
        })
      }
    })

    $('#downloadBox > img').each(function (i) {
      const j = temp.findIndex(({ index }) => index === i)
      const thumbnail = $(this).attr('src')
      if (thumbnail) {
        if (j !== -1) temp[j].thumbnail = thumbnail
        else temp.push({ thumbnail, index: i })
      }
    })
    $('#downloadBox > a').each(function (i) {
      const j = temp.findIndex(({ index }) => index === i)
      const url = $(this).attr('href')
      if (j !== -1) temp[j].url = url
      else temp.push({ url, index: i })
    })
    results = temp.map((tmp) => ({
      thumbnail: tmp.thumbnail as string,
      sourceUrl: tmp.sourceUrl as string,
      url: tmp.url as string
    }))
  }
  if (!results.length) throw new ScraperError(`Can't download!\n${$.html()}`)
  return results
}

export async function instagramdlv3 (url: string): Promise<InstagramDownloaderV2[]> {
  const payload = {
    link: url,
    submit: ''
  }; const headers: Headers = {
    'content-type': 'application/x-www-form-urlencoded',
    origin: 'https://instasave.website',
    referer: 'https://instasave.website/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
  }

  const body: Response<string> = await got('https://instasave.website/', {
    form: payload,
    method: 'POST',
    headers: headers
  }).catch(async (_) => await got('https://server.instasave.website/', {
    form: payload,
    method: 'POST',
    headers: {
      ...headers,
      origin: 'https://server.instasave.website',
      referer: 'https://server.instasave.website'
    }
  }))
  const $ = cheerio.load(body.body)
  let results: InstagramDownloaderV2[] = []
  if ($('#downloadBox > a').length) {
    const temp: {
      thumbnail?: string;
      sourceUrl?: string;
      index: number;
      url?: string;
    }[] = []
    $('#downloadBox > video').each(function (i) {
      const thumbnail = $(this).attr('poster')
      const sourceUrl = $(this).find('source[src]').attr('src')
      if (thumbnail) {
        temp.push({
          thumbnail,
          sourceUrl,
          index: i
        })
      }
    })

    $('#downloadBox > img').each(function (i) {
      const j = temp.findIndex(({ index }) => index === i)
      const thumbnail = $(this).attr('src')
      if (thumbnail) {
        if (j !== -1) temp[j].thumbnail = thumbnail
        else temp.push({ thumbnail, index: i })
      }
    })
    $('#downloadBox > a').each(function (i) {
      const j = temp.findIndex(({ index }) => index === i)
      const url = $(this).attr('href')
      if (j !== -1) temp[j].url = url
      else temp.push({ url, index: i })
    })
    results = temp.map((tmp) => ({
      thumbnail: tmp.thumbnail as string,
      sourceUrl: tmp.sourceUrl as string,
      url: tmp.url as string
    }))
  }
  if (!results.length) throw new ScraperError(`Can't download!\n${$.html()}`)
  return results
}

export async function instagramdlv4 (url: string): Promise<InstagramDownloaderV4[]> {
  const payload = {
    url: encodeURIComponent(url)
  }
  const data: string = await got('https://instadownloader.co/insta_downloader.php', {
    headers: {
      cookie: '_ga=GA1.2.1733350350.1642305936; __gads=ID=b4bd840227b997e8-22bf10a0f9cf00c8:T=1642305940:RT=1642305940:S=ALNI_MYAmf2IjxwGlzs5qXm4WFoP5pgocg; PHPSESSID=336eed35f823c84f35a580ae2f326934; _gid=GA1.2.1286454531.1646479747; _gat=1',
      referer: 'https://instadownloader.co/id/',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    },
    searchParams: payload
  }).json()
  const json: {
    images_links: InstagramDownloaderV4[];
    videos_links: InstagramDownloaderV4[]
  } = JSON.parse(data)
  if (!(json.images_links?.length || json.videos_links?.length)) throw new ScraperError(`Can't download!\n${JSON.stringify(json, null, 2)}`)
  return [
    ...json.images_links,
    ...json.videos_links
  ] as InstagramDownloaderV4[]
}

// export async function instagramdlv5 (url: string): Promise<InstagramDownloaderV5[]> {
//   const json: {
//     url: {
//       url: string;
//       name: string;
//       type: string;
//       ext: string;
//     }[];
//     meta: {
//       title: string;
//       source: string;
//     }
//     thumb: string;
//     [Key: string]: any
//   } = await got('https://api.savefrom.biz/api/convert', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       origin: 'https://savefrom.biz',
//       referer: 'https://savefrom.biz/',
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
//     },
//     json: {
//       url
//     }
//   }).json()
//   return json.url.map(({ url, ext }) => ({
//     url: `https://savefrom.biz${encodeURIComponent(url)}`,
//     ext
//   })) as InstagramDownloaderV5[]
// }

export async function instagramStory (name: string): Promise<InstagramStory> {
  const resKey = await got('https://storydownloader.app/en')
  const $$ = cheerio.load(resKey.body)
  const _token = $$('input[name="_token"]').attr('value')
  const cookie = resKey.headers['set-cookie']?.map(v => v.split('; ')[0]).join('; ').trim()
  const headers: Headers = {
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    cookie: cookie || 'locale=eyJpdiI6IjE5VUJqZm1DdXl3ODhoQnV2SHJaMFE9PSIsInZhbHVlIjoiUnBqZTMvbDFUTWZLWVkvQy9rVjVhOUdrbjRWTVRCYmp2aTVaUlVsUnZZY0RWN2ZoVkdjMVNhemM1MFl6eWt2dCIsIm1hYyI6IjdlMTc4ZDZkMTYyMDVmMTcwZTc5Nzg3YTBjM2ZkOWEyNjRlODZmZDIwOGY5OTgyYzQzZjE3YTY3MjQ2NGNlYzQiLCJ0YWciOiIifQ%3D%3D; _ga_ZXS0LB5VTY=GS1.1.1647856609.1.0.1647856609.0; _ga=GA1.1.1392191220.1647856609; XSRF-TOKEN=eyJpdiI6IkhjVVdRMmRSZ0tOaklvUHlncWxqeVE9PSIsInZhbHVlIjoiTkZLTnFmUnpjM0Y0KzF3NmpxNnMyMTJQWmNPRXFPVjlKQW9la3poN3kySEN4UUw0TUd3TGIzZ0plT2RUWXJGTEp1bzF1NkN2R3FrQkdLbmJpa0o4cUZUM2EzS2N4QTY2aGVKdFM0ZWNhclZBQVBhMDV1cm4vcEZFMVB5NXRLL1UiLCJtYWMiOiI4MjQ1ZDJhYWE2NjQ1MGUyMmY5ZmQ0OTlkMDFhNjZjOWE2MGVjMTRlNmFjN2VjMmNkYzA0OGY5OTRkMDY3MjI3IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjQ2RHJ3TUtRU1gxblhpbGtsNXRqamc9PSIsInZhbHVlIjoiTFl2bTg5QVhxcHBkZUN2THRPYkxhbnBmWEkyaWdBc0RFbDM0eUhhbGY0RCs2NFFmRXQ2NXBaNktUMkVpYk9wcDF2SE11SUQ0bW9zazJYaUdLQVZFbjJTaXZ3MmREUEJURnczb1c4ZE5uNDJzTVprNytjNzVCT3loS1ovKysyR1oiLCJtYWMiOiIzOTAyMDc5MDg1N2UxZjgwYmExODcwMjQ2ZWQzNGJjODM3YzkxOTI2MTkwMTEzMTFjNjExN2IzZjdkMmY0ODI4IiwidGFnIjoiIn0%3D',
    origin: 'https://storydownloader.app',
    referer: 'https://storydownloader.app/en',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    'X-CSRF-TOKEN': _token
  }
  const formData = new Form()
  formData.append('username', name)
  formData.append('_token', _token)
  const res = await got('https://storydownloader.app/request', {
    method: 'POST',
    headers: {
      ...headers,
      ...formData.getHeaders()
    },
    body: formData.getBuffer()
  })
  const { html }: {
    [key: string]: any,
    html: string
  } = JSON.parse(res.body)
  if (!html) throw new ScraperError(`Can't download!\n${res.body}`)
  const $ = cheerio.load(html)
  const username = $('h3.card-title').text()
  const profilePicUrl = $('img.card-avatar').attr('src') as string
  const results: InstagramStory['results'] = []
  $('div.row > div').each(function () {
    const $el = $(this)
    const thumbnail = $el.find('img').attr('src')
    const url = $el.find('a').attr('href') as string
    const type = /video_dashinit\.mp4/i.test(url) ? 'video' : 'image'
    const isVideo = type === 'video'
    if (thumbnail && url) {
      results.push({
        thumbnail,
        url,
        type,
        isVideo
      })
    }
  })
  return {
    user: {
      username,
      profilePicUrl
    },
    results
  }
}

export async function instagramStoryv2 (name: string): Promise<InstagramStoryv2> {
  const headers: Headers = {
    accept: '*/*',
    cookie: '_ga=GA1.2.1814586753.1642307018; _gid=GA1.2.136857157.1642307018; __gads=ID=6f5ca6608dd8b1e9-22e4ea18ffcf0077:T=1642307019:RT=1642307019:S=ALNI_MZA7NeGtOEcSPXyFhf4LY8w7Myg9g; PHPSESSID=1i9dscs75l6v2h17cvdtd587b4; _gat=1; FCNEC=[["AKsRol9R3FQaOjrrETFMIMIvWtuoY3xRHpQEPHMujRWOd_nxuLgWCSyYK9lLC3ev0L5V8fuaSIjhupCtaReRepP4qNvch536pzvrcU13Gh8CRHSEIh8O3zM42ASwGUQfjoKbxkTV1L15EA6O7FLZ-Qh3Fy1rvh_h8w=="],null,[]]',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
  }
  const data = await got('https://www.instagramsave.com/instagram-story-downloader.php', {
    headers: {
      ...headers,
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      referer: 'https://www.google.com/'
    }

  }).text()
  const $ = cheerio.load(data)
  const payload = {
    url: 'https://www.instagram.com/' + name,
    action: 'story',
    token: $('#token').val() as string,
    json: ''
  }
  const { user, medias: results, error }: {
    user: {
      id: string;
      username: string;
      fullName: string;
      profilePicUrl: string;
      biography: string;
      followers: number;
      following: number;
    }
    medias: {
      type: string;
      fileType: string;
      url: string;
      downloadUrl: string;
      preview: string;
    }[];
    error?: string;
  } = await got('https://www.instagramsave.com/system/action.php', {
    form: payload,
    method: 'POST',
    headers: {
      ...headers,
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      origin: 'https://www.instagramsave.com',
      referer: 'https://www.instagramsave.com/instagram-story-downloader.php'
    }
  }).json()
  if (error || !results) throw new ScraperError(`Maybe user ${name} not have story!!\n${JSON.stringify({ error, user, results, payload }, null, 2)}`)
  return {
    user,
    results: results.map(({ preview, url, downloadUrl, type, fileType }) => ({
      thumbnail: preview,
      url: downloadUrl,
      sourceUrl: url,
      type,
      fileType,
      isVideo: type === 'video'
    }))
  }
}

export async function instagramStalk (username: string): Promise<InstagramStalk> {
  const data = await got(`https://dumpor.com/search?query=${encodeURIComponent(username).replace(/%20/g, '+')}`).text()
  const $ = cheerio.load(data)
  const accounts: { url: string, avatar: string, username: string }[] = []
  $('#nav-profiles > div > div.search-item').each(function () {
    const el = $(this)
    const url = el.find('.content__img-wrap > a')
      .attr('href')?.trim()
    if (url) {
      accounts.push({
        url,
        avatar: el.find('.content__img-wrap > a > img')
          .attr('src')?.trim() as string,
        username: el.find('.content__text > a')
          .text().trim()
      })
    }
  })
  const html = await got(`https://dumpor.com/${accounts[0].url}`).text()
  const $$ = cheerio.load(html)
  const name = $$('div.user__title > a > h1').text().trim()
  const Uname = $$('div.user__title > h4').text().trim()
  const description = $$('div.user__info-desc').text().trim()
  const row = $$('#user-page > div.container > div > div > div:nth-child(1) > div > a')
  const postsH = row.eq(0).text().replace(/Posts/i, '')?.trim()
  const followersH = row.eq(2).text().replace(/Followers/i, '')?.trim()
  const followingH = row.eq(3).text().replace(/Following/i, '')?.trim()
  const list = $$('ul.list > li.list__item')
  const posts = parseInt(
    list.eq(0).text().replace(/Posts/i, '')
      ?.trim()?.replace(/\s/g, '')
  )
  const followers = parseInt(
    list.eq(1).text().replace(/Followers/i, '')
      ?.trim()?.replace(/\s/g, '')
  )
  const following = parseInt(
    list.eq(2).text().replace(/Following/i, '')
      ?.trim()?.replace(/\s/g, '')
  )
  return {
    name,
    username: Uname,
    avatar: accounts[0].avatar,
    description,
    postsH,
    posts,
    followersH,
    followers,
    followingH,
    following
  }
}
module.exports = { InstagramDownloader,
  InstagramDownloaderV2,
  InstagramDownloaderV4,
  InstagramStory,
  InstagramStoryv2,
  InstagramStalk}