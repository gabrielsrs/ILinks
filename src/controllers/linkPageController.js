import { request, response } from "express"
import { ListLinksService } from "../services/listLinksService.js"

class LinkPageController {
    async handle(request, response) {
        const listLinksService = new ListLinksService()

        const allLinks = await listLinksService.execute()
        console.log(allLinks)
        return response.render("index.ejs", { data: allLinks })
    }
}

export { LinkPageController }