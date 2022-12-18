const User = require("../models/User")

async function getUsers() {
    try {
        const users = await User.find()
        if (users.length < 1)
            throw new Error("NO HAY USUARIOS EN LA BASE DE DATOS")
        return users
    } catch (err) {
        throw err
    }
}

async function createUser(user) {
    const { email, password } = user
    //Quizas esta validacion esté de mas
    if (!email) throw new Error("Falta email")
    if (!password) throw new Error("Falta contraseña")
    try {
        // verifico si el usuario ya existe
        const emailExist = await User.findOne({
            email,
        }).exec()
        if (emailExist)
            throw new Error(
                `Ya existe un usuario registrado con este email ${email}, por favor ingresa otro`
            )
        const createdUser = await User.create(user)
        return createdUser
    } catch (err) {
        throw err
    }
}

module.exports = {
    getUsers,
    createUser,
}
