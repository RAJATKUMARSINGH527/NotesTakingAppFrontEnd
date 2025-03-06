// import { useState, useEffect } from "react";
// import "./Dashboard.css";
// import { bcUrl} from "../src/urlStore/bcUlr";

// const NotesDashboard = () => {
//   const [notes, setNotes] = useState([]);
//   const [editMode, setEditMode] = useState(null);
//   const [updatedTitle, setUpdatedTitle] = useState("");
//   const [updatedDescription, setUpdatedDescription] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${bcUrl}/notes`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setNotes([...data.notes]);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Failed to fetch notes. Please try again.");
//         setLoading(false);
//       });
//   }, []);

//   const handleEdit = (noteId) => {
//     if (!updatedTitle.trim() || !updatedDescription.trim()) {
//       alert("Title and description cannot be empty.");
//       return;
//     }

//     fetch(`${bcUrl}/notes/${noteId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//       body: JSON.stringify({
//         title: updatedTitle,
//         description: updatedDescription,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.msg);
//         setNotes((prevNotes) =>
//           prevNotes.map((note) =>
//             note._id === noteId
//               ? { ...note, title: updatedTitle, description: updatedDescription }
//               : note
//           )
//         );
//         setEditMode(null);
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Failed to update the note. Please try again.");
//       });
//   };

//   const handleDelete = (noteId) => {
//     fetch(`${bcUrl}/notes/${noteId}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.msg);
//         setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Failed to delete the note. Please try again.");
//       });
//   };

//   return (
//     <div className="NotesDashboard">
//       <h2>Welcome to Your Notes Dashboard</h2>
//       {loading ? (
//         <p>Loading notes...</p>
//       ) : notes.length > 0 ? (
//         <div className="notes-container">
//           {notes.map((note) => (
//             <div key={note._id} className="note-card">
//               {editMode === note._id ? (
//                 <div className="edit-form">
//                   <input
//                     type="text"
//                     placeholder="Enter updated title"
//                     value={updatedTitle}
//                     onChange={(e) => setUpdatedTitle(e.target.value)}
//                     className="edit-input"
//                   />
//                   <textarea
//                     placeholder="Enter updated description"
//                     value={updatedDescription}
//                     onChange={(e) => setUpdatedDescription(e.target.value)}
//                     className="edit-textarea"
//                   />
//                   <button
//                     onClick={() => handleEdit(note._id)}
//                     className="save-button"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => setEditMode(null)}
//                     className="cancel-button"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <div className="note-display">
//                   <h3>Title: {note.title}</h3>
//                   <p>Description: {note.description}</p>
//                   <div className="button-container">
//                     <button
//                       onClick={() => {
//                         setEditMode(note._id);
//                         setUpdatedTitle(note.title);
//                         setUpdatedDescription(note.description);
//                       }}
//                       className="edit-button"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(note._id)}
//                       className="delete-button"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <h2>No notes to display</h2>
//       )}
//     </div>
//   );
// };

// export { NotesDashboard };



// // import { useState, useEffect } from "react";
// // import "./Dashboard.css";

// // const NotesDashboard = () => {
// //   const [notes, setNotes] = useState([]);
// //   const [editMode, setEditMode] = useState(null);
// //   const [updatedTitle, setUpdatedTitle] = useState("");
// //   const [updatedDescription, setUpdatedDescription] = useState("");



// //   // Fetching notes from the server and displaying them on the dashboard when the component mounts for the first time.
// //   useEffect(() => {
// //     fetch("http://localhost:8000/notes", {
// //       method: "GET",
// //       headers: {
// //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
// //       },
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setNotes([...data.notes]);
// //         console.log(data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);




// //   // Function to handle the edit operation of a note.
// //   const handleEdit = (noteId) => {
// //     fetch(`http://localhost:8000/notes/${noteId}`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
// //       },
// //       body: JSON.stringify({
// //         title: updatedTitle,
// //         description: updatedDescription,
// //       }),
// //     })
// //       .then((res) => res.json())

// //       .then((data) => {
// //         alert(data.msg);
// //         setNotes((prevNotes) => {
// //           const updatedNotes = prevNotes.map((note) => {
// //             if (note._id === noteId) {
// //               // Update only the note with the matching ID
// //               return {
// //                 ...note,
// //                 title: updatedTitle,
// //                 description: updatedDescription,
// //               };
// //             }
// //             // Keep other notes as they are
// //             return note;
// //           });
// //           return updatedNotes; // Return the updated list of notes
// //         });
// //         setEditMode(null);
// //         console.log(data);
// //       })

// //       .catch((err) => console.log(err));
// //   };




// //   // Function to handle the delete operation of a note.
// //   const handleDelete = (noteId) => {
// //     fetch(`http://localhost:8000/notes/${noteId}`, {
// //       method: "DELETE",
// //       headers: {
// //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
// //       },
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         alert(data.msg);
// //         // Removing the deleted note from the state directly
// //         setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
// //         console.log(data);
// //       })
// //       .catch((err) => console.log(err));
// //   };

// //   // Displaying the notes on the dashboard.
// //   return (
// //     <div className="NotesDashboard">
// //       <h2>Welcome to Your Notes Dashboard</h2>
// //       <div>
// //         {notes ? (
// //           notes.map((note) => {
// //             return (
// //               <div key={note._id}>
// //                 {editMode === note._id ? (
// //                   <>
// //                     <input
// //                       type="text"
// //                       placeholder="Enter updated title"
// //                       value={updatedTitle}
// //                       onChange={(e) => setUpdatedTitle(e.target.value)}
// //                     />
// //                     <textarea
// //                       placeholder="Enter updated description"
// //                       value={updatedDescription}
// //                       onChange={(e) => setUpdatedDescription(e.target.value)}
// //                     />
// //                     <button onClick={() => handleEdit(note._id)}>Save</button>
// //                     <button onClick={() => setEditMode(null)}>Cancel</button>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <h3>Title : {note.title}</h3>
// //                     <p>Description : {note.description}</p>
// //                     <button
// //                       onClick={() => {
// //                         setEditMode(note._id);
// //                         setUpdatedTitle(note.title);
// //                         setUpdatedDescription(note.description);
// //                       }}
// //                     >
// //                       Edit
// //                     </button>
// //                     <button onClick={() => handleDelete(note._id)}>
// //                       Delete
// //                     </button>
// //                   </>
// //                 )}
// //               </div>
// //             );
// //           })
// //         ) : (
// //           <h2>No notes to display</h2>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export { NotesDashboard };

// {
//   /* <div key={note.id}></div> // Add key prop to the parent element of the list of notes because React needs a way to uniquely identify each element in the list. */
// }


// import { useState, useEffect } from "react";
// import "./Dashboard.css";
// import { bcUrl, bcUrlLocal } from "../src/urlStore/bcUlr";

// const BASE_URL = process.env.NODE_ENV === "development" ? bcUrlLocal : bcUrl;

// const NotesDashboard = () => {
//   const [notes, setNotes] = useState([]);
//   const [editMode, setEditMode] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [loggedInUserId, setLoggedInUserId] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userToken = localStorage.getItem("accessToken");
//         if (!userToken) return;

//         const userResponse = await fetch(`${BASE_URL}/users/`, {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//           },
//         });

//         const userData = await userResponse.json();
//         setLoggedInUserId(userData.userId); // Assuming API returns userId
//         console.log("User data:", userData);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     const fetchNotes = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/notes`, {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         });

//         const data = await response.json();
//         setNotes(data.notes || []);
//       } catch (error) {
//         console.error("Error fetching notes:", error);
//         alert("Failed to fetch notes. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//     fetchNotes();
//   }, []);

//   const handleEdit = async (noteId, updatedTitle, updatedDescription) => {
//     if (!updatedTitle.trim() || !updatedDescription.trim()) {
//       alert("Title and description cannot be empty.");
//       return;
//     }

//     try {
//       const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//         body: JSON.stringify({ title: updatedTitle, description: updatedDescription }),
//       });

//       const data = await response.json();
//       alert(data.msg);

//       setNotes((prevNotes) =>
//         prevNotes.map((note) =>
//           note._id === noteId ? { ...note, title: updatedTitle, description: updatedDescription } : note
//         )
//       );
//       setEditMode(null);
//     } catch (error) {
//       console.error("Error updating note:", error);
//       alert("Failed to update the note. Please try again.");
//     }
//   };

//   const handleDelete = async (noteId) => {
//     try {
//       const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       });

//       const data = await response.json();
//       alert(data.msg);
//       setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
//     } catch (error) {
//       console.error("Error deleting note:", error);
//       alert("Failed to delete the note. Please try again.");
//     }
//   };

//   return (
//     <div className="NotesDashboard">
//       <h2>Welcome to Your Notes Dashboard</h2>
//       {loading ? (
//         <p>Loading notes...</p>
//       ) : notes.length > 0 ? (
//         <div className="notes-container">
//           {notes.map((note) => (
//             <div key={note._id} className="note-card">
//               {editMode === note._id ? (
//                 <EditForm
//                   note={note}
//                   onSave={(title, description) => handleEdit(note._id, title, description)}
//                   onCancel={() => setEditMode(null)}
//                 />
//               ) : (
//                 <div className="note-display">
//                   <h3>Title :- {note.title}</h3>
//                   <p>Description :- {note.description}</p>
//                   {loggedInUserId === note.owner && ( // Check if logged-in user owns this note
//                     <div className="button-container">
//                       <button onClick={() => setEditMode(note._id)} className="edit-button">
//                         Edit
//                       </button>
//                       <button onClick={() => handleDelete(note._id)} className="delete-button">
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <h2>No notes to display</h2>
//       )}
//     </div>
//   );
// };

// const EditForm = ({ note, onSave, onCancel }) => {
//   const [title, setTitle] = useState(note.title);
//   const [description, setDescription] = useState(note.description);

//   return (
//     <div className="edit-form">
//       <input
//         type="text"
//         placeholder="Enter updated title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="edit-input"
//       />
//       <textarea
//         placeholder="Enter updated description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="edit-textarea"
//       />
//       <button onClick={() => onSave(title, description)} className="save-button">
//         Save
//       </button>
//       <button onClick={onCancel} className="cancel-button">
//         Cancel
//       </button>
//     </div>
//   );
// };

// export { NotesDashboard };


import { useState, useEffect } from "react";
import "./Dashboard.css";
import { bcUrl, bcUrlLocal } from "../src/urlStore/bcUlr";

const BASE_URL = process.env.NODE_ENV === "development" ? bcUrlLocal : bcUrl;

const NotesDashboard = () => {
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/notes`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await response.json();
        setNotes(data.notes || []);
      } catch (error) {
        console.error("Error fetching notes:", error);
        alert("Failed to fetch notes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handleEdit = async (noteId, updatedTitle, updatedDescription) => {
    if (!updatedTitle.trim() || !updatedDescription.trim()) {
      alert("Title and description cannot be empty.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ title: updatedTitle, description: updatedDescription }),
      });

      const data = await response.json();
      alert(data.msg);
      
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === noteId ? { ...note, title: updatedTitle, description: updatedDescription } : note
        )
      );
      setEditMode(null);
    } catch (error) {
      console.error("Error updating note:", error);
      alert("Failed to update the note. Please try again.");
    }
  };

  const handleDelete = async (noteId) => {
    try {
      const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const data = await response.json();
      alert(data.msg);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.error("Error deleting note:", error);
      alert("Failed to delete the note. Please try again.");
    }
  };

  return (
    <div className="NotesDashboard">
      <h2>Welcome to Your Notes Dashboard</h2>
      {loading ? (
        <p>Loading notes...</p>
      ) : notes.length > 0 ? (
        <div className="notes-container">
          {notes.map((note) => (
            <div key={note._id} className="note-card">
              {editMode === note._id ? (
                <EditForm
                  note={note}
                  onSave={(title, description) => handleEdit(note._id, title, description)}
                  onCancel={() => setEditMode(null)}
                />
              ) : (
                <div className="note-display">
                  <h3>Title: {note.title}</h3>
                  <p>Description: {note.description}</p>
                  <div className="button-container">
                    <button onClick={() => setEditMode(note._id)} className="edit-button">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(note._id)} className="delete-button">
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <h2>No notes to display</h2>
      )}
    </div>
  );
};

const EditForm = ({ note, onSave, onCancel }) => {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  return (
    <div className="edit-form">
      <input
        type="text"
        placeholder="Enter updated title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="edit-input"
      />
      <textarea
        placeholder="Enter updated description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="edit-textarea"
      />
      <button onClick={() => onSave(title, description)} className="save-button">
        Save
      </button>
      <button onClick={onCancel} className="cancel-button">
        Cancel
      </button>
    </div>
  );
};

export { NotesDashboard };

