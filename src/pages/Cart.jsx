import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductCartTrunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/Cart/ProductInCart'
import usePurchases from '../hooks/usePurchases'

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
    <div>
       <h2>Cart</h2> 
       <div>
       {
        cartGlobal?.map(prodCart => (
            <ProductInCart
                key={prodCart.id}
                prodCart={prodCart}
            />
        ))
       }
       </div>
       <footer>
          <span>Total:</span>
          <h3>S/. {totalPriceCart}</h3>
          <button onClick={handlePurchases} className='cart__btn'>Buy now</button>
       </footer>
    </div>
  )
}

export default Cart