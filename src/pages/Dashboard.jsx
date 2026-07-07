import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Dashboard() {
  const [totalStudents, setTotalStudents] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        setTotalStudents(querySnapshot.size);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
<div className="bg-blue-700 text-white px-8 py-6 shadow-lg">
  <div className="flex justify-between items-start">

    <div>
      <h1 className="text-4xl font-bold">
        Generation Next Foundation
      </h1>

      <p className="mt-2 text-lg">
        Welcome, Admin 👋
      </p>
    </div>

    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 rounded-md shadow-md"
    >
      🚪 Logout
    </button>

  </div>
</div>
      {/* Main */}
      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-4xl font-bold mb-8">
          Dashboard Overview
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 text-lg">👨‍🎓 Total Students</h3>
            <p className="text-5xl font-bold text-blue-700 mt-4">
              {totalStudents}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 text-lg">📚 Total Courses</h3>
            <p className="text-5xl font-bold text-green-600 mt-4">
              4
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 text-lg">📞 Contact</h3>
            <p className="text-2xl font-bold mt-4">
              9453650995
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 text-lg">📧 Email</h3>
            <p className="text-lg font-semibold mt-4 break-all">
              gnextgonda@gmail.com
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

         <Link to="/add-student">
  <div className="w-64 h-64 bg-blue-700 hover:bg-blue-800 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-105 cursor-pointer">

    <div className="text-7xl mb-4">➕</div>

    <h2 className="text-2xl font-bold">
      Add Student
    </h2>

    <p className="text-sm mt-2 text-center px-4">
      Register a new student in the system.
    </p>

  </div>
</Link>

          <Link to="/students">
  <div className="w-64 h-64 bg-green-600 hover:bg-green-700 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-105 cursor-pointer">

    <div className="text-7xl mb-4">📋</div>

    <h2 className="text-2xl font-bold">
      Student List
    </h2>

    <p className="text-sm mt-2 text-center px-4">
      View and manage all registered students.
    </p>

  </div>
</Link>

         <Link to="/search-student">
  <div className="w-64 h-64 bg-orange-500 hover:bg-orange-600 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-105 cursor-pointer">

    <div className="text-7xl mb-4">🔍</div>

    <h2 className="text-2xl font-bold">
      Search Student
    </h2>

    <p className="text-sm mt-2 text-center px-4">
      Search student details instantly.
    </p>

  </div>
</Link>

           <Link to="/typing-course">
  <div className="w-64 h-64 bg-purple-700 hover:bg-purple-800 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-105 cursor-pointer">

    <div className="text-7xl mb-4">
      ⌨️
    </div>

    <h2 className="text-2xl font-bold">
      Typing Course
    </h2>

    <p className="text-sm mt-2 text-center px-4">
      Practice English typing and improve your speed & accuracy.
    </p>

  </div>
</Link>
       <Link to="/typing-results">
  <div className="w-64 h-64 bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-105 cursor-pointer">

    <div className="text-7xl mb-4">
      📊
    </div>

    <h2 className="text-2xl font-bold">
      Typing Results
    </h2>

    <p className="text-sm mt-2 text-center px-4">
      View all typing test results and performance history.
    </p>

  </div>
</Link> 
 

           
         

        </div>

      </div>

    </div>
  );
}

export default Dashboard;