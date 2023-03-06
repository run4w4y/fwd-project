import { XKCDComic, XKCDComicId } from './types'

export const getXkcdComicId = async (email: string): Promise<XKCDComicId> => {
    const fwdApiUrl = 'https://fwd.innopolis.app/api/hw2?' + new URLSearchParams({ email })
    const fwdApiRes = await fetch(fwdApiUrl)
    const id = await fwdApiRes.json() as XKCDComicId
    return id
}

export const getXkcdComic = async (id: XKCDComicId): Promise<XKCDComic> => {
    const xkcdApiUrl = `https://getxkcd.vercel.app/api/comic?num=${id}`
    const xkcdApiRes = await fetch(xkcdApiUrl)
    const xkcdComic = await xkcdApiRes.json() as XKCDComic
    return xkcdComic
}
