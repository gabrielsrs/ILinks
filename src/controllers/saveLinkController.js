import { SaveLinkService } from "../services/saveLinkService.js"
import { TryCatch } from "../utils/tryCatch.js"

class SaveLinkController {
    handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async () => {
            const { title, link } = req.body
        
            const saveLinkService = new SaveLinkService()

            const savedLink = await saveLinkService.execute({
                title,
                link
            })
            
            return res.json(savedLink)
            return res.redirect("/")
        })
    }
}

export { SaveLinkController }