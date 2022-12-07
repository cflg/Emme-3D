import { Formik, Form, Field } from "formik"
import { useState } from "react"
import "./CrearProducto.css"
const CrearProducto = () => {
    // const [images, setImages] = useState([])
    // const [imageToRemove, setImageToRemove] = useState(null)

    /* Reescribir completamente este componenete y no usar formik */

    const [created, setCreated] = useState(false)
    //este arreglo hace de db por ahora
    let productos = []

    //reemplazar esta constante con las categorias que vienen del back
    const categoriasArray = [
        {
            id: 1,
            name: "Mates",
        },
        {
            id: 2,
            name: "Lamparas",
        },
        {
            id: 3,
            name: "Vasos",
        },
    ]

    /* const handleOpenWidget = () => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "emme3d",
                uploadPreset: "igsag6pi",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info)
                    setImages((prev) => [
                        ...prev,
                        {
                            url: result.info.url,
                            public_id: result.info.public_id,
                        },
                    ])
                }
            }
        )
        myWidget.open()
    } */

    return (
        <div className="create-product-container">
            <Formik
                initialValues={{
                    name: "",
                    price: "",
                    categorias: [],
                    stock: "",
                    description: "",
                    img: "",
                }}
                validate={(data) => {
                    let errors = {}
                    //validacion de nombre
                    if (!data.name) {
                        errors.nombre = "Ingresa un nombre"
                    }
                    //validaciones de precio
                    if (!data.price) {
                        errors.precio = "El producto debe tener un precio"
                    } /*  else if (data.price < 1) {
                        errors.precio = "El precio debe ser mayor a 1"
                    } else if (typeof data.price !== "number") {
                        errors.precio = "El precio debe ser un numero"
                    } */
                    //validacion de categoria
                    if (!data.categorias) {
                        errors.categorias = "Elige una categoria"
                    }
                    //validacon de stock
                    if (!data.stock) {
                        errors.stock = "Ingresa las unidades disponibles"
                    } /*  else if (data.stock < 0) {
                        errors.stock = "El stock no puede ser negativo"
                    } else if (typeof data.stock !== "number") {
                        errors.stock = "El stock debe ser un numero"
                    } */
                    //validacion de descripcion
                    if (!data.description) {
                        errors.description = "Describe el producto"
                    }
                    //validacion de iamgen
                    if (!data.img) {
                        errors.img = "Ponle una imagen al producto"
                    }

                    return errors
                }}
                onSubmit={(data, { resetForm }) => {
                    //reemplazar este push por el metodo post
                    productos.push(data)
                    console.log(productos)
                    //este metodo sirve para dejar el form en blanco cuando se hace submit
                    resetForm()
                    //seteo este estado para mostrar un mensaje cuando se crea un producto
                    setCreated(true)
                    //seteo de nuevo el estado para eliminar el mensaje
                    setTimeout(() => {
                        setCreated(false)
                    }, 3000)
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <p className="crear-producto-title">
                            Crear nuevo producto
                        </p>
                        <div>
                            {/* <label htmlFor="nombre">Nombre</label> */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre del producto"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="inputs"
                            />
                            {touched.name && errors.nombre && (
                                <p className="create-product-error">
                                    {errors.nombre}
                                </p>
                            )}
                        </div>
                        <div>
                            {/* <label htmlFor="precio">Precio</label> */}
                            <input
                                type="text"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Precio"
                                className="inputs"
                            />
                            {touched.price && errors.precio && (
                                <p className="create-product-error">
                                    {errors.precio}
                                </p>
                            )}
                        </div>
                        <div>
                            {/* <label htmlFor="categoria">Categoria</label> */}
                            <select
                                name="categorias"
                                onChange={handleChange}
                                className="inputs"
                            >
                                <option
                                    disabled
                                    selected
                                    className="select-options"
                                >
                                    <p className="select-cat">Categoria</p>
                                </option>
                                {categoriasArray.map((c) => {
                                    return (
                                        <option
                                            value={c.name}
                                            className="select-options"
                                        >
                                            {c.name}
                                        </option>
                                    )
                                })}
                            </select>
                            {touched.categorias && errors.categorias && (
                                <p className="create-product-error">
                                    {errors.categorias}
                                </p>
                            )}
                        </div>
                        <div>
                            {/* <label htmlFor="stock">Stock</label> */}
                            <input
                                type="text"
                                name="stock"
                                placeholder="Stock"
                                value={values.stock}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="inputs"
                            />
                            {touched.stock && errors.stock && (
                                <p className="create-product-error">
                                    {errors.stock}
                                </p>
                            )}
                        </div>
                        <div>
                            {/* <label htmlFor="description">Descripcion</label> */}
                            <textarea
                                style={{ resize: "none" }}
                                name="description"
                                rows="5"
                                cols="33"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Descripcion"
                                className="inputs"
                            >
                                Descripcion
                            </textarea>
                            {touched.description && errors.description && (
                                <p className="create-product-error">
                                    {errors.description}
                                </p>
                            )}
                        </div>
                        <div>
                            {/* <label htmlFor="imagen">Imagen</label> */}
                            <input
                                type="text"
                                name="img"
                                value={values.img}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Url de la imagen"
                                className="inputs"
                            />
                            {touched.img && errors.img && (
                                <p className="create-product-error">
                                    {errors.img}
                                </p>
                            )}
                        </div>
                        {/* inicio cloudinary */}

                        {/* <div>
                            <p>Imagenes</p>
                            <button
                                id="upload_widget"
                                type="button"
                                name="img"
                                value={values.img}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onClick={() => handleOpenWidget()}
                            >
                                Cargar imagenes
                            </button>
                            <img id="uploadedimage" src=""></img>
                        </div> */}
                        {/* fin cloudinary */}
                        <button type="submit" className="btn-crear-producto">
                            Crear producto
                        </button>
                        {created && (
                            <p className="create-product-success">
                                Producto creado con exito!
                            </p>
                        )}
                    </Form>
                )}
            </Formik>
            {/* <div>
                <p>Imagenes</p>
                {images.map((img) => (
                    <div>
                        <img src={img.url} alt={img.public_id} />
                        {console.log(img.url)}
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default CrearProducto
