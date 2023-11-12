import Joi from "joi";

class TitleValidator {
    validate({ title: title }) {
        const titleSchema = Joi.string().trim()

        const { error, value } = titleSchema.validate(title)
        if (error) throw error

        return value
    }
}

class LinkValidator {
    validate({ link: link }) {
        const titleSchema = Joi.string().uri()

        const { error, value } = titleSchema.validate(link)
        if (error) throw error

        return value
    }
}

export { TitleValidator, LinkValidator }