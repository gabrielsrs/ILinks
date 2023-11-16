import Link from "../models/linkModel.js"
import { StringValidator, LinkValidator } from "../utils/validateReqData.js"
import { ValidateUrl } from "../utils/validateUrl.js"
import { FaviconLink } from "../utils/faviconLink.js"

class SaveLinkService {
    async execute ({ title, link }) {
        const titleValidator = new StringValidator()
        const linkValidator = new LinkValidator()

        titleValidator.validate({ data: title })
        linkValidator.validate({ link })
        
        const validateUrl = new ValidateUrl()

        await validateUrl.validate({
            link, 
            options: { timeout: 10000 }
        })

        const faviconLink = new FaviconLink()
        const urlFavicon = faviconLink.favicon({ link })

        const { status: validateLinkImg } = await validateUrl.validate({
            link: urlFavicon, 
            options: { timeout: 10000 }
        })
        
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