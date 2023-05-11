import React from 'react'
import { useForm } from 'react-hook-form'
import './Styles/FilterPrice.css'
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
   <article className='price'>
    <h3 className='price_title'>Price</h3>
    <form  className='price_form' onSubmit={handleSubmit(submit)}>
        <div  className='price_item'>
            <label className='price_label' htmlFor="from">From</label>
            <input className='price_input' {...register('from')} type="text"id='from' />
        </div>
        <div className='price_item'>
            <label className='price_label' htmlFor="to">To</label>
            <input className='price_input' {...register('to')} type="number"id='to' />
        </div>
    </form>
        <button className='price_btn'>Filter Price</button>
   </article>
  )
}

export default FilterPrice