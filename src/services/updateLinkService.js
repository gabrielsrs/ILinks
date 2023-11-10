import Link from "../models/linkModel.js"
import axios from "axios"

class UpdateLinkService {
    async execute({ id: id, title: title, link: link, items: items }) {
        const itemToBeUpdate = items[id]._id

        if(title && !title.trim()) {
            throw new Error({err: "Title wasn't filled!"})
        }

        const { validateLink, validateLinkImg, urlFavicon } = await (async () => {
            if(link) {
                if(!link.trim()) {
                    throw new Error({ err: "Link wasn't filled!" })
                }
                await axios.get(link, {
                    timeout: 10000
                })
                .then(response => {
                    return response.status
                })
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

                return { validateLink: true, validateLinkImg, urlFavicon }
            } 

            return { validateLink: false, validateLinkImg: 404, urlFavicon: false }
        })()

        const updateItem = await Link.findOneAndUpdate({
            _id: itemToBeUpdate
        }, {
            title:  title || items[id].title,
            link: validateLink && link || items[id].link,
            favicon: validateLinkImg == 200 && urlFavicon || items[id].favicon
        }, {
            new: true
        })

        console.log(updateItem)

        return updateItem
    }
}

export { UpdateLinkService }