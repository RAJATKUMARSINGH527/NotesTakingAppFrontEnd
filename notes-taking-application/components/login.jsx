// import { useState } from "react";
// import "./Login.css"; 
// import { Link } from "react-router-dom";
// import { bcUrl } from "../src/urlStore/bcUlr";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     const payload = { email, password };

//     fetch(`${bcUrl}/users/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.message);
//         if (data.token) {
//           localStorage.setItem("accessToken", data.token);
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="login-container">
//       <h2>Login to Your Account</h2>
//       <input
//         type="email"
//         className="login-input"
//         placeholder="Email Address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         className="login-input"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="login-button" onClick={handleLogin}>Login</button>
//       <p className="login-signup-text">
//         Don't have an account?{" "}
//         <Link to="/signup" className="signup-link">
//           Register here
//         </Link>
//       </p>
//     </div>
//   );
// };

// export { Login };

import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { bcUrl } from "../src/urlStore/bcUlr"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const payload = { email, password };

    try {
      const response = await fetch(`${bcUrl}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      alert("User Logged in successful!");
      localStorage.setItem("accessToken", data.token);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
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
      <button className="login-button" onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
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
