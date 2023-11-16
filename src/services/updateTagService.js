import Tag from "../models/tagModel.js"
import { StringValidator, ColorValidator } from "../utils/validateReqData.js"


class UpdateTagService {
    async execute({ id: id, tagName: name, tagColor: color, tags: tags }) {
        const tagToBeUpdate = tags[id]._id

        const nameValidator = new StringValidator()
        const colorValidator = new ColorValidator()

        nameValidator.validate({ data: name, allowEmpty: true })
        colorValidator.validate({ color, allowEmpty: true })

        const updatedTag = await Tag.findOneAndUpdate({
            _id: tagToBeUpdate
        }, {
            name: name || tags[id].name,
            color: color || tags[id].color
        }, {
            new: true
        })

        console.log(updatedTag)
        return updatedTag
    }
}

export { UpdateTagService }