// Login.js
import React, { useState, useContext } from "react";
import "./../../AuthForms.css"; // Importing the CSS
import { Link, useNavigate } from "react-router-dom"; // Importing Link
import ApiContext from "./../../../../contexts/ApiContext";
import axios from "axios";
import { useAuth } from "../../../../contexts/authContext";

function Login() {
  const { setIsAuthenticated } = useAuth();
  const { BASE_URL } = useContext(ApiContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginURL = `${BASE_URL}/auth/login`;

    // Execute the POST request
    try {
      const authObj = {
        username,
        password,
      };

      const response = await axios.post(loginURL, {
        authObj,
      });

      if (response.status === 201) {
        alert("Login successful");
        setIsAuthenticated(true);
        navigate("/");
      } else if (response.status === 404) {
        alert("User not found");
        setUsername("");
        setPassword("");
      } else {
        console.log("Login failed", response.data);
        alert("Login Failed");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      alert("Something went wrong");
      setUsername("");
      setPassword("");
      console.error("Error:", error);
      // Handle network errors
    }
  };

  return (
    <div className="auth-form login-form">
      <h2 className="form-header">Login</h2>
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
        <input type="submit" value="Log In" />
        <p className="auth-switch">
          Not registered? <Link to="/auth/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
