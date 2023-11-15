import { SaveLinkService } from "../services/saveLinkService.js"
import { TryCatch } from "../utils/tryCatch.js"

class SaveLinkController {
    handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async () => {
            const { title, link } = req.body
        
            const saveLinkService = new SaveLinkService()

            await saveLinkService.execute({
                title,
                link
            })
            
            res.redirect("/")
        })
    }
}

export { SaveLinkController }