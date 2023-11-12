class ErrorHandler {
    handle(err, request, response, next) {
        return response.status(400).send(err.message || "Error 400")
    }
}

export { ErrorHandler }