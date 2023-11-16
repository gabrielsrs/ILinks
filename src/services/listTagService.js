import Tag from "../models/tagModel.js"

class ListTagService {
    async execute() {
        const tag = await Tag.find().exec()

        return tag
    }

}

export { ListTagService }