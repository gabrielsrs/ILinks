import { TryCatch } from "../utils/tryCatch.js"
import { RemoveTagService } from "../services/removeTagService.js"
import { ListTagService } from "../services/listTagService.js"

class RemoveTagController {
    async handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async () => {
            const { id } = req.params

            const removeTagService = new RemoveTagService()
            const listTagService = new ListTagService()

            const allTags = await listTagService.execute()

            const tagData = await removeTagService.execute({
                id,
                tags: allTags
            })

            return res.json(tagData)
        })
    }
}

export { RemoveTagController }