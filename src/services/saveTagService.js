import Tag from "../models/tagModel.js"
import { StringValidator, ColorValidator } from "../utils/validateReqData.js"

class SaveTagService {
    async execute({ tagName: name, tagColor: color }) {
        const nameValidator = new StringValidator()
        const colorValidator = new ColorValidator()

        nameValidator.validate({ data: name })
        colorValidator.validate({ color })

        const saveTag = new Tag({
            name,
            color
        })

        const save = await saveTag.save()
        
        console.log(save)
        return save
    }
}

export { SaveTagService }