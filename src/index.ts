import { getXkcdComic, getXkcdComicId } from './requests'

window.onload = async () => {
    const xkcdImg = document.querySelector('#xkcd-img')
    const xkcdText = document.querySelector('#xkcd-text')

    if (!xkcdImg || !xkcdText) {
        console.error('Couldnt find image and text nodes for the comic')
        return
    }

    const id = await getXkcdComicId('va.makarov@innopolis.university')
    const xkcdComic = await getXkcdComic(id)

    console.log(xkcdComic)

    xkcdImg.setAttribute('src', xkcdComic.img)
    xkcdImg.setAttribute('alt', xkcdComic.alt)
    const date = new Date(
        parseInt(xkcdComic.year), 
        parseInt(xkcdComic.month) - 1, 
        parseInt(xkcdComic.day)
    )
    xkcdText.textContent = `${xkcdComic.title} - ${date.toLocaleDateString()}`
}