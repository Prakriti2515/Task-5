import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., validate and save user data)
    console.log("Signing up with:", name, email, password);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2>Create a New Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px", borderRadius: "4px" }}
          required
        />
        <br />
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
          placeholder="Create a password"
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
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
