import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };

    fetch("https://notestakingappbackend-wx6m.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",// This is important to send the data in JSON format to the server side to parse it. 
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        localStorage.setItem("accessToken", data.token);
        // console.log(data);
      })
      .catch((error) => console.log(error));

    // console.log(payload);
    // console.log("Login button clicked!");
  };

  return (
    <>
      <h2>Please Login Yourself!!</h2>
      <input
        type="text"
        placeholder="Enter your Email...."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Your Password..."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Login!</button>
    </>
  );
};

export { Login };
