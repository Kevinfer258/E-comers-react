import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { useDispatch } from "react-redux"
import { getAllProductCartTrunk } from "../store/slices/cart.slice"
import { useState } from "react"

const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

const usePurchases = () => {

    const [purchases, setPurchases] = useState()

    const dispatch = useDispatch()


    const buyThisCArt = () => {
        axios.post(url,{}, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCartTrunk())
        })
        .catch(err => console.error(err))
    }

    const getAllProductPurchases = () => {
        axios.get(url, getConfigToken())
        .then(res => setPurchases(res.data))
        .catch(err => console.error(err))
    }

    return {buyThisCArt, getAllProductPurchases, purchases}
}

export default usePurchases