// import { useState } from "react";
// import "./CreateNotes.css";
// import { bcUrl, bcUrlLocal } from "../src/urlStore/bcUlr";

// const BASE_URL = process.env.NODE_ENV === "development" ? bcUrlLocal : bcUrl;

// const CreateNotes = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleNotes = () => {
//     const payload = {
//         title,
//         description,
//     };

//     fetch(`${BASE_URL}/notes/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//       body: JSON.stringify(payload),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.msg);
//         localStorage.setItem("accessToken", data.token);
//         console.log(data);
//       })
//       .catch((error) => console.log(error));

//     // console.log(payload);
//     // console.log("Login button clicked!");
//   };

//   return (
//     <div className="CreateNotes">
//       <h2>Please go ahead, and create your note</h2>
//       <input
//         type="text"
//         placeholder="Enter your title...."
//         value={title}
//         onChange={(e) => {
//           setTitle(e.target.value);
//         }}
//       />
//       <textarea name="" id="" placeholder="Enter your description...." value={description}
//         onChange={(e) => {
//           setDescription(e.target.value);
//         }}/>


      
//       <button onClick={handleNotes}>Create Note</button>
//     </div>
//   );
// };

// export { CreateNotes };

import { useState } from "react";
import "./CreateNotes.css";
import { bcUrl, bcUrlLocal } from "../src/urlStore/bcUlr";
import { Link } from "react-router-dom";

const BASE_URL = process.env.NODE_ENV === "development" ? bcUrlLocal : bcUrl;

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNotes = async () => {
    // Input validation
    if (!title || !description) {
      setError("Please fill in both title and description.");
      return;
    }

    const payload = {
      title,
      description,
    };

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/notes/createnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.msg); // Success alert
        localStorage.setItem("accessToken", data.token);
        // Clear the form after successful note creation
        setTitle("");
        setDescription("");
      } else {
        setError(data.msg || "Something went wrong!");
      }
    } catch (error) {
      setError("Failed to create note. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="CreateNotes">
      <h2>Please go ahead, and create your note</h2>
      {error && <p className="error-message">{error}</p>}

      <input
        type="text"
        placeholder="Enter your title...."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />

      <textarea
        placeholder="Enter your description...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={loading}
      />
      <Link to="/dashboard">
      <button onClick={handleNotes} disabled={loading}>
        {loading ? "Creating..." : "Create Note"}
      </button>
      </Link>
      
    </div>
  );
};

export { CreateNotes };
