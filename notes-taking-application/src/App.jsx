import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "../components/signup";
import { Login } from "../components/login";
import { CreateNotes } from "../components/CreateNotes";
import { NotesDashboard } from "../components/Dashboard";
import { Home } from "../components/HomePage";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import "./App.css";

function App() {
  const token = localStorage.getItem("accessToken"); // Check if user is logged in
  
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Routes */}
          <Route path="/createnotes" element={token ? <CreateNotes /> : <Login />} /> 
          <Route path="/dashboard" element={token ? <NotesDashboard /> : <Login />} /> 
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
