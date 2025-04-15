import React from "react";
import "../Login/LoginC.scss";
import   { useState } from "react";
import axios from "axios";

const Login = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/Login",
        {
          name,
          password,
        }
      );

      setMessage(response.data.message);

      if (response.data.status === "success") {
        alert("Login Successful!");
        // Redirect or store authentication token
      } else {
        alert("Invalid credentials. Try again!");
      }
    } catch (error) {
      setMessage("Error logging in. Check the backend.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="loginMainContainer">
      <div
        style={{ maxWidth: "300px", margin: "50px auto", textAlign: "left" }}
      >
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
          <button
            type="submit"
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          >
            Login
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Login;
