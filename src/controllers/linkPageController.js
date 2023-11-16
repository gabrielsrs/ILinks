import { ListLinksService } from "../services/listLinksService.js"
import { ListTagService } from "../services/listTagService.js"
import { TryCatch } from "../utils/tryCatch.js"

class LinkPageController {
    async handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async () => {
            const listLinksService = new ListLinksService()
            const listTagService = new ListTagService()

            const allLinks = await listLinksService.execute()
            const allTags = await listTagService.execute()

            return res.json({ links: allLinks, tags: allTags })
            return res.render("index.ejs", { links: allLinks, tags: allTags })
        })
    }
}

export { LinkPageController }