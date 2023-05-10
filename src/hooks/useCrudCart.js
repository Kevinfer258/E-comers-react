import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductCartTrunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const useCrudCart = () => {

    const dispatch = useDispatch()

    const addProductToCart = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        axios.post(url, data,getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCartTrunk())
        })
        .catch(err => console.error(err))
        //ejecutar el update
    }

    const deleteProductFromCart = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.delete(url ,getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCartTrunk())
        })
        .catch(err => console.error(err))
    }

    const updateProductInCart = (id, data) => {
        const url=`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.put(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCartTrunk())
        })
        .catch(err => console.error(err))
    }

        return {addProductToCart, deleteProductFromCart, updateProductInCart}
}

export default useCrudCart