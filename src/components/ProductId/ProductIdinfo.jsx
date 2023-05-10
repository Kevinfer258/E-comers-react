import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductIdinfo = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const {addProductToCart} = useCrudCart()

    const handlePlus= () =>  setQuantity(quantity + 1) 

    const handleMinus= () => {
        if(quantity - 1 >= 1){
        setQuantity(quantity-1)
        } 
    }

    const handleAddCart = () => {
        const data = {
            quantity,
            productId: product.id
        }
        addProductToCart(data)
    }

  return (
    <section>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <div>
                <span>Price</span>
                <span>{product?.price}</span>
            </div>
            <div>
                <span>Quanquity</span>
                <div>
                    <button onClick={handleMinus}>-</button>
                    <div>{quantity}</div>
                    <button onClick={handlePlus}>+</button>
                </div>
                <button onClick={handleAddCart}>
                    Add to cart <i className='bx bx-cart'></i>
                </button>
            </div>
        </footer>
    </section>
  )
}

export default ProductIdinfo