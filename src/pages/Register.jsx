import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaulRegisterValues from '../utils/defaultRegisterValius'

const Register = () => {

  const {register, handleSubmit , reset} = useForm()

  const { createNewUser } =  useAuthentication()

  const submit = data => {
    createNewUser(data)
    reset(defaulRegisterValues)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>CREATE A NEW USER</h2>
      <div>
        <label htmlFor="firstName">Firt Name:</label>
        <input {...register('firstName')} type='text' id='firstName'/>
      </div>
      <div>
        <label htmlFor="ñastName">Last Name:</label>
        <input {...register('lastName')} type='text' id='lastName'/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input {...register('email')} type='email' id='email'/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input {...register('password')} type='password' id='password'/>
      </div>
      <div>
        <label htmlFor="phone">phone:</label>
        <input {...register('phone')} type='tel' id='phone'/>
      </div>
      <button>Register</button>
    </form>
  )
}

export default Register