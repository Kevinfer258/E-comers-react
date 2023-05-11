import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import './Styles/SimilarProducts.css'

const SimilarProducts = ({product}) => {

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`
    const [ filterProducts, getProductByCategory ] = useFetch(url)

    useEffect(() => {
        if(product) {
        getProductByCategory()
        }
    }, [product])

  return (
    <section className='sp-general'>
        <h2 className='sp-h2'>Discover similar products</h2>
        <div className='sp-container'>
            {
                filterProducts?.map(prod => {
                    if(prod.id !== product.id){
                        return(
                            <CardProduct 
                            key={prod.id}
                            product={prod}
                        />
                        )
                    }
                })
            }
        </div>
    </section>
  )
}

export default SimilarProducts