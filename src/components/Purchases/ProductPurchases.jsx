import React from 'react'

const ProductPurchases = ({prodPurchases}) => {


  return (
    <article>
        <img src={prodPurchases?.product.images[0].url} alt="" />
        <h3>{prodPurchases.product.title}</h3>
        <span>{prodPurchases.quantity} inidad</span>
        <span>: S/.{prodPurchases.quantity * prodPurchases.product.price}</span>
    </article>
  )
}

export default ProductPurchases