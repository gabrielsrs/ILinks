import { request, response } from "express";

class UpdateTagController {
    async handle(request, response) {
        const route = request
        console.log(route.body)
    }
}

export { UpdateTagController }