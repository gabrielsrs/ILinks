import Joi from "joi";

class StringValidator {
    validate({ data: data, allowEmpty = false }) {
        let titleSchema
        allowEmpty ? titleSchema = Joi.string().trim().allow(""): titleSchema = Joi.string().trim()

        const { error, value } = titleSchema.validate(data)
        if (error) throw error

        return value
    }
}

class LinkValidator {
    validate({ link: link, allowEmpty = false }) {
        let linkSchema
        allowEmpty ? linkSchema = Joi.string().trim().uri().allow(""): linkSchema = Joi.string().trim().uri()

        const { error, value } = linkSchema.validate(link)
        if (error) throw error

        return value
    }
}

class ColorValidator{
    validate({ color: color, allowEmpty = false }) {
        const  validationColor = (value, helpers) => {
            const clrRegex = /^#[0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}$/

            if (!clrRegex.test(value)) {
                return helpers.error('any.invalid')
            }

            return value
        }

        let colorSchema
        allowEmpty? colorSchema = Joi.string().allow(""): 
            colorSchema = Joi.string().custom(validationColor, 'custom color validation')

        const { error, value } = colorSchema.validate(color)
        if (error) throw error

        return value
    }
}

export { StringValidator, LinkValidator, ColorValidator }