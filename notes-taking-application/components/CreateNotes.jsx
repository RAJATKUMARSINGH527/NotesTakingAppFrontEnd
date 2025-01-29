import { useState } from "react";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleNotes = () => {
    const payload = {
        title,
        description,
    };

    fetch("https://notestakingappbackend-wx6m.onrender.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        // localStorage.setItem("accessToken", data.token);
        // console.log(data);
      })
      .catch((error) => console.log(error));

    // console.log(payload);
    // console.log("Login button clicked!");
  };

  return (
    <>
      <h2>Please go ahead, and create your note</h2>
      <input
        type="text"
        placeholder="Enter your title...."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea name="" id="" placeholder="Enter your description...." value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}/>


      
      <button onClick={handleNotes}>Create Note</button>
    </>
  );
};

export { CreateNotes };
