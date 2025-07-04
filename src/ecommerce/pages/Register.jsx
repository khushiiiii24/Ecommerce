import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate=useNavigate();
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    password: "",
    role:"user"
  });
  function handleOnChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ecommerce-api-8ga2.onrender.com/api/user/register",
        formData
      );
      // setformData("");
      navigate("/Login");
      console.log(response);
    } catch (error) {
      console.log("error aaya h");
    }
  }
  return (
    <div>
      <h1 className=""></h1>
      <div className="wrapper">
        <h1 className="">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            placeholder="First Name"
            onChange={handleOnChange}
          ></input>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            placeholder="Last Name"
            onChange={handleOnChange}
          ></input>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input "
                type="radio"
                name="gender"
                value="male"
                id="flexRadioDefault1"
                checked={formData.gender === "male"}
                onChange={handleOnChange}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                id="flexRadioDefault2"
                checked={formData.gender === "female"}
                onChange={handleOnChange}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email ID"
            onChange={handleOnChange}
          ></input>

          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleOnChange}
          ></input>

          <button type="submit" value="Register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
