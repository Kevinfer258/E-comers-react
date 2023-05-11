import React from "react";
import { useForm } from "react-hook-form";
import useAuthentication from "../hooks/useAuthentication";
import defaulRegisterValues from "../utils/defaultRegisterValius";
import './styles/register.css'

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createNewUser } = useAuthentication();

  const submit = (data) => {
    createNewUser(data);
    reset(defaulRegisterValues);
  };

  return (
    <div className="register__container">
      <h2 className="register__title">CREATE NEW USER</h2>
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <div>
          <label className="register__label" htmlFor="firstName">Firt Name:</label>
          <input className="register__input" {...register("firstName")} type="text" id="firstName" />
        </div>
        <div>
          <label className="register__label" htmlFor="lastName">Last Name:</label>
          <input className="register__input" {...register("lastName")} type="text" id="lastName" />
        </div>
        <div>
          <label className="register__label" htmlFor="email">Email:</label>
          <input className="register__input" {...register("email")} type="email" id="email" />
        </div>
        <div>
          <label className="register__label" htmlFor="password">Password:</label>
          <input className="register__input" {...register("password")} type="password" id="password" />
        </div>
        <div>
          <label className="register__label" htmlFor="phone">phone:</label>
          <input className="register__input" {...register("phone")} type="tel" id="phone" />
        </div>
        <button className="register__btn">Register</button>
      </form>
    </div>
  );
};

export default Register;