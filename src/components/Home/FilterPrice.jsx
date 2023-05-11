import React from 'react'
import { useForm } from 'react-hook-form'

const FilterPrice = ({setfromTo}) => {
   const {reset, register, handleSubmit} = useForm()
   const submit = data =>{
    setfromTo(data)
    reset({
        from:'',
        to:''
    })
   }
  return (
   <article>
    <h3>Price</h3>
    <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="from">from</label>
            <input {...register('from')} type="text"id='from' />
        </div>
        <div>
            <label htmlFor="to">to</label>
            <input {...register('to')} type="number"id='to' />
        </div>
        <button>Filter Price</button>
    </form>
   </article>
  )
}

export default FilterPrice