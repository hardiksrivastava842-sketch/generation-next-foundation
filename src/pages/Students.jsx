import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));

        const studentList = [];

        querySnapshot.forEach((doc) => {
          studentList.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setStudents(studentList);
      } catch (error) {
        console.log("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // Search Filter
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Students List
        </h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Students Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-100">

                    <td className="p-3">{student.name}</td>

                    <td className="p-3">{student.course}</td>

                    <td className="p-3">{student.mobile}</td>

                    <td className="p-3 text-center">
                      <Link
                        to={`/student/${student.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        View
                      </Link>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-6 text-gray-500"
                  >
                    No student found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Students;