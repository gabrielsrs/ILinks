import { request, response } from "express";
import { SaveLinkService } from "../services/saveLinkService.js"

class SaveLinkController {
    async handle(request, response) {
        const { title, link } = request.body
        
        const saveLinkService = new SaveLinkService()

        await saveLinkService.execute({
            title,
            link
        })
        
        response.redirect("/")
    }
}

export { SaveLinkController }