import { RemoveLinkService } from "../services/removeLinkService.js"
import { ListLinksService } from "../services/listLinksService.js"
import { TryCatch } from "../utils/tryCatch.js"

class RemoveLinkController {
    async handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async () => {
            const { id } = req.params

            const removeLinkService = new  RemoveLinkService()
            const listLinksService = new ListLinksService()

            const allItems = await listLinksService.execute()

            const deletedItem = await removeLinkService.execute({
                id,
                items: allItems
            })

            return res.json(deletedItem)
        })    
    }
}

export { RemoveLinkController }