class FaviconLink {
    favicon({ link: link }) {
        const url = new URL(link)
        const urlFavicon = `${url.origin}/favicon.ico`

        return urlFavicon
    }
}

export { FaviconLink }