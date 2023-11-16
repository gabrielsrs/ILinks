import Tag from "../models/tagModel.js"

class RemoveTagService {
    async execute({ id: id, tags: tags }) {
        const tagIdToRemove = tags[id]._id
        
        const removeTag = await Tag.deleteOne({
            _id: tagIdToRemove
        }).exec()

        console.log(removeTag)
        return removeTag
    }
}

export { RemoveTagService }