import { request, response } from "express";
import { UpdateLinkService } from "../services/updateLinkService.js"
import { ListLinksService } from "../services/listLinksService.js"

class UpdateLinkController {
    async handle(request, response) {
        const { id } = request.params
        const { title, link } = request.query

        const updateLinkService = new  UpdateLinkService()
        const listLinksService = new ListLinksService()

        const items = await listLinksService.execute()

        const itemsUpdated = updateLinkService.execute({
            id,
            title,
            link,
            items
        })

        return response.json(itemsUpdated)
    }
}

export { UpdateLinkController }