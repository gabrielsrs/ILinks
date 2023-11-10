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
        
        await axios.get(link, {
            timeout: 10000
        })
        .then(response => response.status)
        .catch(err => {
            throw new Error({ err: err.message })
        })


        const url = new URL(link)
        const urlFavicon = `${url.origin}/favicon.ico`
        const validateLinkImg = await axios.get(urlFavicon, {
            timeout: 10000
        })
        .then(response => response.status )
        .catch(err => console.error(err.message))

        const linkToSave = new Link({
            title,
            link,
            favicon: validateLinkImg == 200 && urlFavicon || "",
            // Without or give false and store as a string, but don't load img
        })

        const save = await linkToSave.save()

        console.log(save)
        return save
    }
}

export { SaveLinkService }