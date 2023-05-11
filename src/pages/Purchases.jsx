import { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchases from '../components/Purchases/ProductPurchases'


const Purchases = () => {

    const { purchases ,getAllProductPurchases} = usePurchases()

    useEffect(() => {
        getAllProductPurchases()
    },[])

    console.log(purchases)

  return (
    <div>
        <h2 className='purchases__title'>My Purchases</h2>
        <div>
            {
                purchases?.map( prodPurchases => (
                    <ProductPurchases
                    key={prodPurchases}
                    prodPurchases={prodPurchases}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Purchases