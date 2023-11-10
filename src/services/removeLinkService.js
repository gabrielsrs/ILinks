import Link from "../models/linkModel.js"

class RemoveLinkService {
    async execute({ id: id, items: items }) {
        const itemToDelete = items[id]._id

        const deleteItem = await Link.deleteOne({
            _id: itemToDelete
        }).exec()

        return deleteItem
    }
}

export { RemoveLinkService }