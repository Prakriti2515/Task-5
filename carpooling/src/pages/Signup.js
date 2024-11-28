import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", name, email, password);
  };

  return (
    <div className="signup-form">
      <h2>Create a New Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
