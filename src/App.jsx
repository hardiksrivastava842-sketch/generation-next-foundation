import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import SearchStudent from "./pages/SearchStudent";
import TypingCourse from "./pages/TypingCourse";
import TypingResults from "./pages/TypingResults";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      {/* Add Student */}
      <Route path="/add-student" element={<AddStudent />} />

      {/* Edit Student */}
      <Route path="/edit-student/:id" element={<AddStudent />} />

      {/* Student List */}
      <Route path="/students" element={<Students />} />

      {/* Student Details */}
      <Route path="/student/:id" element={<StudentDetails />} />

      {/* Search Student */}
      <Route path="/search-student" element={<SearchStudent />} />
     
      {/* Typing Course */}
      <Route path="/typing-course" element={<TypingCourse />} />

     {/* Typing Results */}
      <Route path="/typing-results" element={<TypingResults />} />  

      

    </Routes>
  );
}

export default App;