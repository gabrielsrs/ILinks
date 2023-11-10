import { request, response } from "express";
import { RemoveLinkService } from "../services/removeLinkService.js"
import { ListLinksService } from "../services/listLinksService.js"

class RemoveLinkController {
    async handle(request, response) {
        const { id } = request.params

        const removeLinkService = new  RemoveLinkService()
        const listLinksService = new ListLinksService()

        const allItems = await listLinksService.execute()

        const deletedItem = await removeLinkService.execute({
            id,
            items: allItems
        })

        return response.json(deletedItem)
    }
}

export { RemoveLinkController }