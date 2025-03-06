import React, { useState,useEffect } from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaStickyNote, FaLightbulb, FaTasks, FaSearch, 
  FaPlus, FaThumbtack, FaFolderOpen
} from "react-icons/fa";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


// Check if user is authenticated
useEffect(() => {
  const userToken = localStorage.getItem("accessToken");

  // console.log("User Token:", userToken); // Debugging

  if (userToken && userToken !== "undefined" && userToken !== "null") {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
}, []);

const handleNewNoteClick = () => {
  if (isLoggedIn) {
    navigate("/createnotes");
  } else {
    navigate("/login");
  }
};

  const pinnedNotes = [
    { title: "Meeting Notes", icon: <FaStickyNote />, color: "#ffcc00" },
    { title: "Project Plan", icon: <FaTasks />, color: "#ff6666" },
  ];

  const recentNotes = [
    { title: "Creative Ideas", icon: <FaLightbulb />, color: "#66ccff" },
    { title: "Personal Journal", icon: <FaStickyNote />, color: "#ff99cc" },
    { title: "Shopping List", icon: <FaTasks />, color: "#99cc66" },
  ];

  const categories = [
    { name: "Work", icon: <FaFolderOpen /> },
    { name: "Personal", icon: <FaFolderOpen /> },
    { name: "Ideas", icon: <FaFolderOpen /> },
    { name: "Tasks", icon: <FaFolderOpen /> },
  ];

  // Filter recent notes based on search
  const filteredNotes = recentNotes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <header className="header">
        Notes Taking Application
        <button className="add-note-btn" onClick={handleNewNoteClick}>
          <FaPlus /> New Note
        </button>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pinned Notes */}
      {pinnedNotes.length > 0 && (
        <section className="pinned-notes">
          <h3><FaThumbtack /> Pinned Notes</h3>
          <Link to="/dashboard">
          <div className="notes-grid">
            {pinnedNotes.map((note, index) => (
              <div key={index} className="note-card" style={{ backgroundColor: note.color }}>
                <span className="note-icon">{note.icon}</span>
                <p>{note.title}</p>
              </div>
              
            ))}
          </div>
          </Link>
          
        </section>
      )}

      {/* Recent Notes */}
      <section className="recent-notes">
        <h3>Recent Notes</h3>
        <Link to="/dashboard">
        <div className="notes-grid">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <div key={index} className="note-card" style={{ backgroundColor: note.color }}>
                <span className="note-icon">{note.icon}</span>
                <p>{note.title}</p>
              </div>
            ))
          ) : (
            <p className="no-notes">No matching notes found.</p>
          )}
        </div>
        </Link>
      </section>

      {/* Categories */}
      <section className="categories">
        <h3>Categories</h3>
        <Link to="/dashboard">
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              {category.icon} {category.name}
            </div>
          ))}
        </div>
        </Link>
      </section>
    </div>
  );
};

export { Home };
