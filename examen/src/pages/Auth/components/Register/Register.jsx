// Register.js
import React, { useState, useContext } from "react";
import "./../../AuthForms.css"; // Importing the CSS
import ApiContext from "./../../../../contexts/ApiContext";
import { Link, useNavigate } from "react-router-dom"; // Importing Link
import axios from "axios";

function Register() {
  const { BASE_URL } = useContext(ApiContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const registerURL = `${BASE_URL}/auth/register`;

    // Execute the POST request
    try {
      const authObj = {
        username,
        password,
      };

      const response = await axios.post(registerURL, {
        authObj,
      });

      if (response.status === 201) {
        alert("Registration successful");
        navigate("/auth/login");
      } else {
        console.log("Registration failed", response.data);
        alert("Registration Failed");

        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration Failed");
      setUsername("");
      setPassword("");
      // Handle network errors
    }
  };

  return (
    <div className="auth-form register-form">
      <h2 className="form-header">Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Register" />
        <p className="auth-switch">
          Already have a account? <Link to="/auth/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
