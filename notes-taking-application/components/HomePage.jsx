import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <header className="header">Notes Taking Application</header>

      <div className="hero">
        <h2>Capture your thoughts, anywhere.</h2>
        <p>A simple and fast way to take and manage notes efficiently.</p>
      </div>

      <Link to="/createnotes">
        <button className="cta-button">Create a Note</button>
      </Link>

      <div className="notes-grid">
        {["Meeting Notes", "Shopping List", "Project Ideas"].map(
          (note, index) => (
            <div key={index} className="note-card">
              <p>{note}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { Home };
