import { request, response } from "express"

class PageController {
    async handle(request, response) {
        return response.render("index.ejs")
    }
}

export { PageController }