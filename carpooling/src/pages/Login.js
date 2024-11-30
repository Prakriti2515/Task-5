import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser,sendResetOtp } from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Clear previous error messages
    setIsLoading(true); // Indicate loading state

    // Check for empty fields
    if (!email || !password) {
      setError("Email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const data = await loginUser(email, password); // Call API function
      localStorage.setItem("token", data.token); // Save token in localStorage
      console.log("Login successful:", data);
      navigate("/"); // Redirect to home or dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Login failed! Please try again."); // Handle API errors
      console.error("Error during login:", err); // Log error for debugging
    } finally {
      setIsLoading(false); // Stop loading after the process completes
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="signup-prompt">
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
