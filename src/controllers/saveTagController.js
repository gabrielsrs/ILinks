import { request, response } from "express";

class SaveTagController {
    async handle(request, response) {
        const route = request
        console.log(route.body)
    }
}

export { SaveTagController }