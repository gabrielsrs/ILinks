import { TryCatch } from "../utils/tryCatch.js"
import { UpdateTagService } from "../services/updateTagService.js"
import { ListTagService } from "../services/listTagService.js"


class UpdateTagController {
    async handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async() => {
            const { id } = req.params
            const { tagName, tagColor } = req.query
            
            const updateTagService = new UpdateTagService()
            const listTagService = new ListTagService()
            
            const allTags = await listTagService.execute()
            const tagData = await updateTagService.execute({
                id,
                tagName,
                tagColor,
                tags: allTags
            })

            return res.json(tagData)
        })
    }
}

export { UpdateTagController }