import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductCartTrunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/Cart/ProductInCart'
import usePurchases from '../hooks/usePurchases'
import './styles/Cart.css'


const Cart = () => {

    const dispatch = useDispatch()
    const { buyThisCArt,  } = usePurchases()

    useEffect(() =>{
        dispatch(getAllProductCartTrunk())
    }, [])

    const {cartGlobal} = useSelector(state => state)

    console.log(cartGlobal)

    const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price , 0)

   const handlePurchases = () =>{
    buyThisCArt()
   }

  return (
    <div className='cart'> 
        <h2 className='cart_title'>Cart</h2>
       <div className='cart_container'>
       {
        cartGlobal?.map(prodCart => (
            <ProductInCart
                key={prodCart.id}
                prodCart={prodCart}
            />
        ))
       }
       </div>
       <footer className='cart_footer'>
          <span className='cart_label'>Total:</span>
          <h3 className='cart_value'> {totalPriceCart}</h3>
          <button onClick={handlePurchases} className='cart__btn'>Buy now</button>
       </footer>
    </div>
  )
}

export default Cart