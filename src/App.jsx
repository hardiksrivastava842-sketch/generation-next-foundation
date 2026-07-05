import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import SearchStudent from "./pages/SearchStudent";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/add-student" element={<AddStudent />} />

      <Route path="/students" element={<Students />} />

      <Route path="/student/:id" element={<StudentDetails />} />

      <Route path="/search-student" element={<SearchStudent />} />

    </Routes>
  );
}

export default App;