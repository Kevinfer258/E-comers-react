import { Link } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";
import "./styles/login.css";

const Login = () => {
  const { loginUser } = useAuthentication();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    loginUser(data);
  };

  return (
    <div className="login__container">
      <h2 className="login__greeting">
        Welcome! Enter your email and password to continue
      </h2>
      <form className="login__form" onSubmit={handleLogin}>
        <div className="login__email">
          <label className="login__label" htmlFor="email">
            Email:
          </label>
          <input className="login__input" type="email" id="email" />
        </div>
        <div className="login__password">
          <label className="login__label" htmlFor="password">
            Password:
          </label>
          <input className="login__input" type="password" id="password" />
        </div>
        <button className="login__btn">Sign in</button>
      </form>
      <h3 className="login__linkRegister">
        Don´t havean account?<Link to={"/register"}>Sing up</Link>
      </h3>
    </div>
  );
};

export default Login;
