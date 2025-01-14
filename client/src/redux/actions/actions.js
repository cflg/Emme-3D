const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const GET_DETAILS = "GET_DETAILS"
const GET_BY_CATEGORY = "GET_BY_CATEGORY"
const GET_BY_PRICE = "GET_BY_PRICE"
const GET_BY_PRICE_RANGE = "GET_BY_PRICE_RANGE"
const GET_BY_SALES = "GET_BY_SALES"
const GET_BY_LIKES = "GET_BY_LIKES"
const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
const GET_CAROUSEL = "GET_CAROUSEL"
const ERROR = "ERROR"
const SEARCH_BY_NAME = "SEARCH_BY_NAME"
const DELETE_PRODUCT = "DELETE_PRODUCT"
//eliminar esta const cuando se creen las rutas
const POST_CAROUSEL = "POST_CAROUSEL"
const UPDATE_PRODUCTO = "UPDATE_PRODUCTO"
const ADD_CART = "ADD_CART"
const CART_LOGOUT = "CART_LOGOUT"
const CART_LOGIN = "CART_LOGIN"
const DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT"
const GET_USERS = "GET_USERS"
const GET_USER_UID = "GET_USER_UID"
const GET_USER_UID_ADMIN = "GET_USER_UID_ADMIN"
const USER_NULL = "USER_NULL"
const GET_USER = " GET_USER"
const PUT_USER = "PUT_USER"
const GET_ORDERS = "GET_ORDERS"
const GET_REVIEWS_BY_ID = "GET_REVIEWS_BY_ID"
const DELETE_USER = "DELETE_USER"
import axios from "axios"

/*--------- INICIO DE SECCION DE FILTROS DE BUSQUEDA -------------*/
export const filterByCategories = (value) => {
    return (dispatch) => {
        try {
            dispatch({
                type: GET_BY_CATEGORY,
                payload: value,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
export const filterByPrice = (value) => {
    return (dispatch) => {
        try {
            dispatch({
                type: GET_BY_PRICE,
                payload: value,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
export const filterByPriceRange = (value) => {
    return (dispatch) => {
        try {
            dispatch({
                type: GET_BY_PRICE_RANGE,
                payload: value,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
export const filterBySales = (value) => {
    return (dispatch) => {
        try {
            dispatch({
                type: GET_BY_SALES,
                payload: value,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
export const filterByLikes = (value) => {
    return (dispatch) => {
        try {
            dispatch({
                type: GET_BY_LIKES,
                payload: value,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
/*--------- FIN DE SECCION DE FILTROS DE BUSQUEDA -------------*/

/*--------- ACTIONS POST -------------*/
//Aqui va la url base del back

//let url_api = "http://localhost:3001"
//let url_api = "https://emme-3d-production-c491.up.railway.app"
let url_api = "https://emme-3d-production-5ffc.up.railway.app"

//Action para postear productos
export const postProduct = (product) => {
    return (dispatch) => {
        try {
            axios.post(url_api + "/products", product)
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

export const postCategory = (category) => {
    return (dispatch) => {
        try {
            axios.post(url_api + "/categories", category)
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

export const carouselUpload = (image) => {
    return async (dispatch) => {
        try {
            const img = await axios.post(url_api + "/carousel", image)
            console.log(img)
            dispatch({
                type: POST_CAROUSEL,
                payload: image,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

/*--------- FIN ACTIONS POST -------------*/

/*--------- ACTIONS GET -------------*/

//Action para traer todos los productos  - preparada para cuando tengamos la conexion con el back
export const getProducts = () => {
    return async (dispatch) => {
        try {
            const products = await axios.get(`${url_api}/products`)
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: products.data,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const categories = await axios.get(`${url_api}/categories`)
            dispatch({
                type: GET_ALL_CATEGORIES,
                payload: categories.data,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const getDetails = (id) => {
    return async (dispatch) => {
        const detalle = await axios.get(`${url_api}/products/${id}`)
        try {
            dispatch({
                type: GET_DETAILS,
                payload: detalle.data[0],
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}
/* Action para SEARCH BY NAME */
export const searchByName = (name) => {
    return async (dispatch) => {
        const searchByName = await axios.get(`${url_api}/products?name=${name}`)
        try {
            if (searchByName.data === null) {
                dispatch({
                    type: ERROR,
                    payload: "No se encontraton resultados",
                })
            } else if (searchByName.data.length === undefined) {
                dispatch({
                    type: SEARCH_BY_NAME,
                    payload: [searchByName.data],
                })
            } else {
                dispatch({
                    type: SEARCH_BY_NAME,
                    payload: searchByName.data,
                })
            }
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const getCarouselImgs = () => {
    return async (dispatch) => {
        try {
            const carouselImgs = await axios.get(`${url_api}/carousel`)
            dispatch({
                type: GET_CAROUSEL,
                payload: carouselImgs.data,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

/*--------- FIN ACTIONS GET -------------*/
/*---------ACTION DELETE PRODUCT-----------*/
export const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            const productDelete = await axios.delete(
                `${url_api}/products/${id}`
            )
            dispatch({
                type: DELETE_PRODUCT,
                payload: productDelete.data,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const carouselDelete = (image) => {
    return (dispatch) => {
        try {
            axios.delete(`${url_api}/carousel/${image}`)
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

/*---------ACTION PUT PRODUCT-----------*/
export const updateProducto = (product_id, producto) => {
    return async (dispatch) => {
        try {
            const productUpdate = await axios.put(
                `${url_api}/products/${product_id}`,
                producto
            )
            dispatch({
                type: UPDATE_PRODUCTO,
                payload: productUpdate.data,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const addToCart = (product) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ADD_CART,
                payload: product,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

export const deleteToCart = (name) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_CART_PRODUCT,
            payload: name,
        })
    }
}

export const cartLogOut = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CART_LOGOUT,
                payload: [],
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
export const cartLogIn = (cart) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CART_LOGIN,
                payload: cart,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

export const getOrders = () => {
    return async (dispatch) => {
        try {
            let allOrders = await axios.get(`${url_api}/orders`)
            dispatch({
                type: GET_ORDERS,
                payload: allOrders.data,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

export const emailBienvenido = (user) => {
    return async (dispatch) => {
        try {
            console.log(user)
            const statusMail = await axios.post(
                `${url_api}/email/usuario`,
                user
            )
            console.log(statusMail)
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const emailContacto = (formulario) => {
    console.log(formulario)
    return async (dispatch) => {
        try {
            const sendMail = await axios.post(
                `${url_api}/email/contacto`,
                formulario
            )
            console.log(sendMail)
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}
/*-----ACTION USERS-----*/

export const createUsers = (users) => {
    return async (dispatch) => {
        try {
            await axios.post(`${url_api}/users`, users)
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        try {
            const user = await axios.get(url_api + `/users`)
            dispatch({
                type: GET_USERS,
                payload: user,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const userNull = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_NULL,
                payload: null,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const getUserByUid = (uid) => {
    return async (dispatch) => {
        try {
            const user_Uid = await axios.get(url_api + "/users/" + uid)

            dispatch({
                type: GET_USER_UID,
                payload: user_Uid.data,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

export const getUserByUidAdmin = (uid) => {
    return async (dispatch) => {
        try {
            const user_Uid = await axios.get(url_api + "/users/" + uid)

            dispatch({
                type: GET_USER_UID_ADMIN,
                payload: user_Uid.data,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

export const updateUser = (user) => {
    return async (dispatch) => {
        console.log(user.id)
        console.log('desdeAction',user)
        try {
            const user_update = await axios.put(
                `${url_api}/users/`+user.id,user
            )
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

/*----------GET Y POST DE REVIEWS-------------*/

export const postReviews = (reviews) => {
    return async (dispatch) => {
        try {
            console.log(reviews)
            const createReviews = await axios.post(
                `${url_api}/reviews`,
                reviews
            )
            console.log(createReviews)
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

export const getReviews = (id) => {
    return async (dispatch) => {
        try {
            const getReviewsById = await axios.get(url_api + `/reviews/` + id)

            dispatch({
                type: GET_REVIEWS_BY_ID,
                payload: getReviewsById.data,
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}

//ACTION PARA EL ENVIO DE MAIL CUANDO LA COMPRA FUE EXITOSA
export const emailSuccessfulOrder = (user) => {
    return async (dispatch) => {
        try {
            const email = await axios.post(`${url_api}/email/pagado`, user)
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}
//ACTION PARA ENVIAR ORDER CUANDO EL PAGO FUE EXITOSO
export const successfulOrder = (order) => {
    return async (dispatch) => {
        try {
            await axios.post(`${url_api}/orders`, order)
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.message,
            })
        }
    }
}
//ELIMINAR UN USUARIO
export const deleteUser = (uid) => {
    return async (dispatch) => {
        try {
            const userDelete = await axios.delete(`${url_api}/users/${uid}`)
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
