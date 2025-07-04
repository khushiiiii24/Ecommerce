import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
  import { ToastContainer, toast } from 'react-toastify';

function Login() {
      const notify = () => toast("Login Successfull!");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "user",
  });
  function handleLoginChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  console.log(loginData);
  const navigate = useNavigate();
  async function handleSubmitLogin(e) {
    e.preventDefault();
    // console.log("working");
    
    try {
      const response = await axios.post(
        "https://ecommerce-api-8ga2.onrender.com/api/user/login",
        loginData,{
          withCredentials:true
        }
      );
      console.log(response);
      toast.success("Login successful!", {
  autoClose: 70000, // 20 seconds
  position: "top-center",
});

      navigate("/");
      // setLoginData(response);
    } catch (error) {
      console.log("error aaya login page pr");
    }
  }
  return (
    <div>
      <div className="login-container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmitLogin}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              placeholder="Enter your password"
              onChange={handleLoginChange}
              required
            />
          </div>
          <button type="submit" value="Login" onClick={notify}>
            Login
             <ToastContainer  />
          </button>
          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/Register">
            Sign Up
          </Link>
        </p>
        
      </div>
    </div>
  );
}

export default Login;
