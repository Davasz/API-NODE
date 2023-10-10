class passwordNotCorrectException extends Error {
    constructor(mensage, statusCode) {
        super(mensage)
        this.statusCode = statusCode || 500;
        this.name = 'PasswordNotCorrectException'
    }
}