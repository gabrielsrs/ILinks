import axios from "axios"

class ValidateUrl {
    async validate({ link: link, options: options = {} }) {
        const validateUrl = await axios.get(link, options)

        return validateUrl
    }
}

export { ValidateUrl }