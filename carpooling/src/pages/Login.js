import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., validate credentials, redirect)
    console.log("Logging in with:", email, password);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px", borderRadius: "4px" }}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px", borderRadius: "4px" }}
          required
        />
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
