import React from "react";
import Input from "../../components/Inputs/Input";
import "./login.css";
const Login = () => {
  return (
    <div className="loginWrapper">
      <h2 className="loginWrapper__headerText">Sign in</h2>
      <p className="loginWrapper__tagline">
        Sign in and start managing your candidates!
      </p>
      <Input type="text" placeHolder="Login" />
      <Input type="password" placeHolder="Password" />
      <div className="loginOptions">
        <div className="loginOption__checkBox">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <p className="loginOption__forgotPassword">Forgot Password?</p>
      </div>
      <button className="btn btn-green">Login</button>
    </div>
  );
};

export default Login;
