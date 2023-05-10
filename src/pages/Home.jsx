import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'


const Home = () => {

  const [imputValue, setimputValue] = useState('')

  const {productsGlobal} = useSelector(state => state)

  const input = useRef()

  const handleChangeInput = () => {
    setimputValue(input.current.value.toLowerCase().trim())
  }
  console.log(productsGlobal)

  const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(imputValue))

  return (
    <div>
      <input ref={input}  onChange={handleChangeInput} type="text"/>
      <FilterCategory />
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