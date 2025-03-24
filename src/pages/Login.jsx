import React from "react";
// import {Bill} from react-router-dom;
import "../pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { useState } from "react";
import Instance from "../AxiosConfig";
function Login() {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    email_id: "",
    user_password: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = Instance.post("/auth/register", { FormData });
      if ((await response).status === 201) {
        console.log("Login successfull");
        navigate("/home");
      }
    } catch (error) {
      console.error("Login Failed");
    }
  }
  return (
    <div>
      <div className="login-container">
        <h2>Login Form</h2>
        {/* <p>Split your bills easily</p> */}
        <form action="#" onClick={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              id="email_id"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="user_password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" value="Login">
            Login
          </button>
          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/SignUp">
            <a href="#">Sign Up</a>
          </Link>
        </p>
            
      </div>
    </div>
  );
}

export default Login;
