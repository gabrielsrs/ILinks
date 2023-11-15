import { ListLinksService } from "../services/listLinksService.js"
import { TryCatch } from "../utils/tryCatch.js"

class LinkPageController {
    async handle(req, res, next) {
        const tryCatch = new TryCatch()
        tryCatch.handle(req, res, next, async () => {
            const listLinksService = new ListLinksService()

            const allLinks = await listLinksService.execute()
            console.log(allLinks)
            return res.render("index.ejs", { data: allLinks })
        })
    }
}

export { LinkPageController }