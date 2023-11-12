class FaviconLink {
    favicon({ link: link }) {
        const url = link
        const urlFavicon = `${url.origin}/favicon.ico`

        return urlFavicon
    }
}

export { FaviconLink }