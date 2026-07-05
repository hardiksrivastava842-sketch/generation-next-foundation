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
      <div className="bg-blue-700 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Generation Next Foundation
        </h1>

        <p className="mt-2 text-lg">
          Welcome, Admin 👋
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-4xl font-bold mb-8">
          Dashboard Overview
        </h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Total Students */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 text-lg">
              👨‍🎓 Total Students
            </h3>

            <p className="text-5xl font-bold text-blue-700 mt-4">
              {totalStudents}
            </p>
          </div>

          {/* Total Courses */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 text-lg">
              📚 Total Courses
            </h3>

            <p className="text-5xl font-bold text-green-600 mt-4">
              4
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 text-lg">
              📞 Contact
            </h3>

            <p className="text-2xl font-bold mt-4">
              9453650995
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 text-lg">
              📧 Email
            </h3>

            <p className="text-lg font-semibold mt-4 break-all">
              gnextgonda@gmail.com
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link to="/add-student">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition">
              ➕ Add Student
            </button>
          </Link>

          <Link to="/students">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              📋 Student List
            </button>
          </Link>

          <Link to="/search-student">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              🔍 Search Student
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;