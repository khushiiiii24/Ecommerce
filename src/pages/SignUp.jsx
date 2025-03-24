import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Instance from "../AxiosConfig";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    user_password: "",
  });
  function handleOnChange() {}
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = Instance.post("/auth/register", {
        FormData,
      });
      if (response.status === 201) {
        console.log("registration successfull");

        navigate("/login");
      }
    } catch (error) {
      console.error("Registration Failed");
    }
  }
  function handleOnChange() {}
  return (
    <div>
      <h1 className=""></h1>
      <div className="wrapper">
        {/* <div className="profile_icon">
          {/* <FaUser /> */}
        {/* </div>  */}
        <h1 className="">Sign Up</h1>
        <form onClick={handleSubmit}>
          <input
            type="text"
            id="first_name"
            name="fname"
            value={FormData.first_name}
            placeholder="First Name"
            onChange={handleOnChange}
          ></input>
          <input
            type="text"
            id="last_name"
            name="lname"
            value={FormData.last_name}
            placeholder="Last Name"
            onChange={handleOnChange}
          ></input>
          <input
            type="email"
            id="email_id"
            name="email"
            value={FormData.email_id}
            placeholder="Email ID"
            onChange={handleOnChange}
          ></input>

          <input
            type="password"
            id="user_password"
            name="password"
            value={FormData.user_password}
            placeholder="Password"
            onChange={handleOnChange}
          ></input>

          <button type="submit" value="Register"></button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
