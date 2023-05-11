import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'


const Home = () => {

  const [imputValue, setimputValue] = useState('')

  const {productsGlobal} = useSelector(state => state)

  const [fromTo, setfromTo] = useState({
    from:0,
    to:Infinity
  })

  const input = useRef()

  const handleChangeInput = () => {
    setimputValue(input.current.value.toLowerCase().trim())
  }

  const productFilter = productsGlobal
  ?.filter(prod => prod.title.toLowerCase().includes(imputValue))
  .filter(prod=>{
    const from = +fromTo.from
    const to= +from.to
    const price= +prod.price
    if(from && to){
      return from <= price && price <= to
    }
    if(from && !to){
      return from <= price
    }
    if(!from && to){
      return price <= to
    }
    if(!from && !to){
      return true
    }
  })

  return (
    <div>
      <input ref={input}  onChange={handleChangeInput} type="text"/>
      <FilterCategory />
      <FilterPrice setfromTo={setfromTo}/>
      <div>
        {
          productFilter?.map(prod =>(
            <CardProduct
              key={prod.id}
              product={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home