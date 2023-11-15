import { UpdateLinkService } from "../services/updateLinkService.js"
import { ListLinksService } from "../services/listLinksService.js"
import { TryCatch } from "../utils/tryCatch.js"

class UpdateLinkController {
    async handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async () => {
            const { id } = req.params
            const { title, link } = req.query

            const updateLinkService = new  UpdateLinkService()
            const listLinksService = new ListLinksService()

            const items = await listLinksService.execute()

            const itemsUpdated = updateLinkService.execute({
                id,
                title,
                link,
                items
            })

            return res.json(itemsUpdated)
        })
    }
}

export { UpdateLinkController }