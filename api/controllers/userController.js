const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
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

async function usersId(id) {
    try {
        const userId = await User.find({
            uid: id,
        }).clone()
        return userId
    } catch (err) {
        throw err
    }
}

async function createUser(user) {
    const { uid, email } = user
    try {
        // verifico si el usuario ya existe
        const emailExist = await User.findOne({
            email,
        }).exec()
        if (emailExist)
            throw new Error(
                `Ya existe un usuario registrado con este email ${email}, por favor ingresa otro`
            )
        const createdUser = await User.create({
            uid,
            email,
        })
        return createdUser
    } catch (err) {
        throw err
    }
}
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

async function deletedUser(id) {
    try {
        const deleteUser = await User.updateOne({ _id: id }, { deleted: true })
        return deleteUser
    } catch (err) {
        throw err
    }
}

async function userUpdate(uid, user) {
    try {
        const update = await User.findOneAndUpdate(
            { uid },
            {
                username: user.username,
                email: user.email,
                name: user.name,
                surname: user.surname,
                address: user.address,
                province: user.province,
                phone: user.phone,
                img: user.img,
            }
        )
        if (update) return "El usuario fue actualizado con exito"
    } catch (err) {
        throw err
    }
}

module.exports = {
    createUser,
    getUsers,
    deletedUser,
    userUpdate,
    usersId,
}
