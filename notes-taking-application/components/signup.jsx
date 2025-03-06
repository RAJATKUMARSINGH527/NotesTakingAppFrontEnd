// import { useState } from "react";
// import "./Signup.css";
// import { Link } from "react-router-dom";
// import { bcUrl } from "../src/urlStore/bcUlr";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = () => {
//     const payload = {
//       name,
//       email,
//       password,
//     };

//     // console.log(payload);
//     fetch(`${bcUrl}/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload), // body data type must match "Content-Type" header 
//       // because we are sending json data to the server so we need to stringify the data before sending it to the server 
//       // payload is the data that we are sending to the server in the form of json
//       //stingify is used to convert the json data into string

//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.message);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="signup-container">
//       <h2>Create an Account</h2>
//       <input
//         type="text"
//         className="signup-input"
//         placeholder="Full Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         className="signup-input"
//         placeholder="Email Address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         className="signup-input"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="signup-button" onClick={handleRegister}>
//         Sign Up
//       </button>
//       <p className="signup-login-text">
//         Already have an account?{" "}
//         <Link to="/login" className="login-link">
//           Login here
//         </Link>
//       </p>
//     </div>
//   );
// };

// export { Signup };
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { bcUrl, bcUrlLocal } from "../src/urlStore/bcUlr";

const BASE_URL = process.env.NODE_ENV === "development" ? bcUrlLocal : bcUrl;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert("Name must contain only letters and spaces.");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email.");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    setIsLoading(true);
    const payload = { name, email, password };

    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Account created successfully! Redirecting to login...");

      // ✅ Redirect to Login Page (not Dashboard)
      navigate("/login", { replace: true });

    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <input
        type="text"
        className="signup-input"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="signup-input"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="signup-input"
        placeholder="Password (min 6 chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signup-button" onClick={handleRegister} disabled={isLoading}>
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>
      <p className="signup-login-text">
        Already have an account?{" "}
        <Link to="/login" className="login-link">
          Login here
        </Link>
      </p>
    </div>
  );
};

export { Signup };
