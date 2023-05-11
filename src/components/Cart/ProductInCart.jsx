import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import './Styles/ProductInCart.css'
const ProductInCart = ({prodCart}) => {

    const {deleteProductFromCart} = useCrudCart()

    const handleDeleteCart = () => {
        deleteProductFromCart(prodCart.id)
    }

  return (
    <article className='prodCart'>
    <header className='prodCart_header'> 
        <img  className='prodCart_img' src={prodCart.product.images[0].url} alt="" />
    </header>
    <section >
        <h3 className='prodCart_title'>{prodCart.product.title}</h3>
    </section>
    <button  className='prodCart_delete' onClick={ handleDeleteCart}>
        <i  className='prodCart_delete-icon' class='bx bx-trash' ></i>
    </button>
    <footer className='prodCart_footer'>
        <span className='prodCart_quanquity'>{prodCart.quantity}</span>
            <div className='prodCart_subtotal'>
                <span className='prodCart_label'>Subtotal:</span>
                <span className='prodCart_value'>{prodCart.product.price * prodCart.quantity}</span>
            </div>
    </footer>
</article>
  )
}

export default ProductInCart