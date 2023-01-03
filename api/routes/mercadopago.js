const router = require("express").Router()
require("dotenv").config()
const { ACCESS_TOKEN_MP } = process.env
const mercadoPago = require("mercadopago")

//Credenciales
mercadoPago.configure({
    access_token: ACCESS_TOKEN_MP,
})

router.post("/", (req, res) => {
    try {
        let preference = {
            items: req.body.map((item) => {
                return {
                    ...item,
                    currency_id: "ARS",
                    quantity: parseInt(item[0].quantity),
                    unit_price: item[0].price,
                }
            }),
            back_urls: {
                success: "http://127.0.0.1:5173/products",
                failure: "http://www.failure.com",
                pending: "http://www.pending.com",
            },
        }
        mercadoPago.preferences.create(preference).then(function (response) {
            res.status(200).json(response.body.init_point)
            // res.json({
            //     id: response.body.id,
            // })
        })
    } catch (err) {
        res.status(404).send(err.message)
    }
})
module.exports = router