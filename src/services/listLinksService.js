import Link from "../models/linkModel.js"

class ListLinksService {
    async execute () {
        const links = await Link.find().exec()
        return links
    }
}

export { ListLinksService }