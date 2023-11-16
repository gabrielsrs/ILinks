import { request } from "express"
import { SaveTagService } from "../services/saveTagService.js"
import { TryCatch } from "../utils/tryCatch.js"

class SaveTagController {
    async handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async () => {
            const { tagName, tagColor } = req.body

            const saveTagService = new SaveTagService()
            const tagSaved = await saveTagService.execute({
                tagName,
                tagColor
            })

            return res.json(tagSaved)
        })
    }
}

export { SaveTagController }