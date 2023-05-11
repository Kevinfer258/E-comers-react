import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdinfo from '../components/ProductId/ProductIdinfo'
import SliderImgs from '../components/ProductId/SliderImgs'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import './styles/ProductId.css'

const ProductId = () => {

   const {id} = useParams()

   const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
   const [product, getProductById] =useFetch(url)

    useEffect(() => {
        getProductById()
    }, [id])

  

  return (
    <div className='slibloque-general'>
      <div className='slibloque-1'>
        <SliderImgs className='sliminibloque' product={product}/>
        <ProductIdinfo className='sliminibloque' product={product}/>
      </div>
        <SimilarProducts product={product}/>
    </div>
  )
}

export default ProductId