class TryCatch {
    async handle(req, res, next, controller) {
        try {
            await controller(req, res, next)
        } catch (err) {
            next(err)
        }
    }
}

export { TryCatch }