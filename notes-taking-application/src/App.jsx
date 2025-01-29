import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "../components/signup";
import { Login } from "../components/login";
import { CreateNotes } from "../components/CreateNotes";
import { NotesDashboard } from "../components/Dashboard";

import "./App.css";

function App() {
  return (
    // <h1>Notes Taking Application</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createnotes" element={<CreateNotes />} />
        <Route path="/dashboard" element={<NotesDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
