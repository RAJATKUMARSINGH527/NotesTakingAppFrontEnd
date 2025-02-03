import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const payload = {
      name,
      email,
      password,
    };

    // console.log(payload);
    fetch("https://notestakingappbackend-wx6m.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header 
      // because we are sending json data to the server so we need to stringify the data before sending it to the server 
      // payload is the data that we are sending to the server in the form of json
      //stingify is used to convert the json data into string

    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Please register Yourself!!</h2>
      <input
        type="text"
        placeholder="Enter Your Name..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Your Email Id..."
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
      <button onClick={handleRegister}>Register!!</button>
    </>
  );
};

export { Signup };
