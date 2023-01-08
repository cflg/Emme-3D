import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./successfulOrder.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import {
    emailSuccessfulOrder,
    successfulOrder,
} from "../../redux/actions/actions"

const SuccessfulOrder = () => {
    const dispatch = useDispatch()
    /* De los estados globales traigo USER - SHOPPINGCART*/
    /*FALTARIA VER CUANDO NICO HAGA SU CAMBIO SI SIGUE SIENDO USER EL ESTADO DONDE VAN LOS DATOS DEL USUARIO*/
    const user = useSelector((state) => state.userByUid)
    const order = useSelector((state) => state.shoppingCart)
    //VARIABLE PARA EL TOTAL
    let sum = 0

    useEffect(() => {
        //DISPACHO AL BACK EL EMAIL DE ORDEN PAGADA CON EXITO
        dispatch(emailSuccessfulOrder(user))
        let total = 0
        order.map(
            (product) => (total += product.price * parseInt(product.quantity))
        )
        order.total = total
        order.user_id = user._id
        dispatch(successfulOrder(order))
    })

    return (
        <div className="successfulOrder">
            <h1 style={{ textAlign: "center", paddingTop: "1em" }}>
                {user.name} SU COMPRA FUE EXITOSA{" "}
            </h1>
            <div className="tabla">
                <table>
                    <tr>
                        <th>Producto</th>
                        <th>Imagen </th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                    {order?.map((o) => {
                        sum = sum + o[0].price * parseInt(o[0].quantity)
                        return (
                            <tr>
                                <td>{o[0].name}</td>
                                <td>
                                    <img src={o[0].img} alt="" />
                                </td>
                                <td>{o[0].quantity}</td>
                                <td>{o[0].price}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <h2 style={{ textAlign: "center" }}>Monto abonado = {sum}</h2>
            <Link to={"/"}>
                <button id="goback">Volver al inicio</button>
            </Link>
        </div>
    )
}
export default SuccessfulOrder
