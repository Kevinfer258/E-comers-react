import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import './Styles/ProductInfo.css'

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
    <section className='Pinfo-total'>
        <div className='Pinfo-container'>
        <h3 className='Pinfo-h3'>{product?.brand}</h3>
        <h2 className='Pinfo-h2'>{product?.title}</h2>
        <p className='Pinfo-p'>{product?.description}</p>
        </div>
        <footer>
            <div className='PinfoGeneral'>
                <div className='Pinfo1'>
                    <span className='Pinfo-price'>Price:</span>
                    <span className='Pinfo-priced'>${product?.price}</span>
                </div>
                <div className='Pinfo2'>
                    <span className='Pinfo-price2'>Quanquity</span>
                    <div className='Pinfo-btnss'>
                        <button className='Pinfo-btn1' onClick={handleMinus}>-</button>
                        <div className='Pinfo-btnss-cantidad'>{quantity}</div>
                        <button className='Pinfo-btn2' onClick={handlePlus}>+</button>
                    </div>
                </div>
            </div>
            <div className='Pinfo-bcart'>
            <button className='Pinfo-addtocart' onClick={handleAddCart}>
                    Add to cart <i className='bx bx-cart'></i>
            </button>
            </div>
        </footer>
    </section>
  )
}

export default ProductIdinfo