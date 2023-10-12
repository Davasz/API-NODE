class httpErrors extends Error {
    constructor(status, mensage) {
        super()
        this.status = status
        this.mensage = mensage
        this.date = new Date()
    }
}

module.exports = httpErrors