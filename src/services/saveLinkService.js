import Link from "../models/linkModel.js"
import axios from "axios"

class SaveLinkService {
    async execute ({ title, link }) {
        if(!title.trim()) {
            throw new Error({err: "Title wasn't filled!"})
        }

        if(!link.trim()) {
            throw new Error({ err: "Link wasn't filled!" })
        }
        
        await axios.head(link, {
            timeout: 10000
        })
        .then(response => {
            return response.status
        })
        .catch(() => {
            throw new Error({ err: "Link wasn't found!" })
        })


        const url = new URL(link)
        const urlFavicon = `${url.origin}/favicon.ico`
        const validateLinkImg = await axios.head(urlFavicon, {
            timeout: 10000
        })
        .then(response => {
            return response.status
        })
        .catch(() => {
            return 404
        })

        const linkToSave = new Link({
            title,
            link,
            favicon: validateLinkImg == 200 && urlFavicon,
        })

        const save = await linkToSave.save()

        console.log(save)
        return save
    }
}

export { SaveLinkService }