import { useState } from "react";
import "./Login.css"; 
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const payload = { email, password };

    fetch("https://notestakingappbackend-wx6m.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.token) {
          localStorage.setItem("accessToken", data.token);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <input
        type="email"
        className="login-input"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <p className="login-signup-text">
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">
          Register here
        </Link>
      </p>
    </div>
  );
};

export { Login };
