import Link from "../models/linkModel.js"
import { TitleValidator, LinkValidator } from "../utils/validateReqData.js"
import { ValidateUrl } from "../utils/validateUrl.js"
import { FaviconLink } from "../utils/faviconLink.js"

class UpdateLinkService {
    async execute({ id: id, title: title, link: link, items: items }) {
        const itemToBeUpdate = items[id]._id

        const titleValidator = new TitleValidator()
        titleValidator.validate(title)

        const { validateLink, validateLinkImg, urlFavicon } = await (async () => {
            const linkValidator = new LinkValidator()
            linkValidator.validate(link)

            const validateUrl = new ValidateUrl()

            await validateUrl.validate({
                link, 
                options: { timeout: 10000 }
            })

            const faviconLink = new FaviconLink()
            const urlFavicon = faviconLink.favicon(link)

            const validateLinkImg = await validateUrl.validate({
                link: urlFavicon, 
                options: { timeout: 10000 }
            })

            return { validateLink: true, validateLinkImg, urlFavicon }
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