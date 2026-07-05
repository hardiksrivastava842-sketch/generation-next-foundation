import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "students"));

      const studentList = [];

      querySnapshot.forEach((document) => {
        studentList.push({
          id: document.id,
          ...document.data(),
        });
      });

      setStudents(studentList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "students", id));

      alert("✅ Student Deleted Successfully!");

      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("❌ Error deleting student");
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Students List
        </h1>

        <input
          type="text"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg"
        />

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-700 text-white">

              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-left">Mobile</th>
                <th className="p-4 text-center">Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredStudents.length > 0 ? (

                filteredStudents.map((student) => (

                  <tr
                    key={student.id}
                    className="border-b hover:bg-gray-100"
                  >

                    <td className="p-4">
                      {student.name}
                    </td>

                    <td className="p-4">
                      {student.course}
                    </td>

                    <td className="p-4">
                      {student.mobile}
                    </td>

                    <td className="p-4">

                      <div className="flex justify-center gap-2">

                        <Link
                          to={`/student/${student.id}`}
                          className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
                        >
                          👁 View
                        </Link>

                        <Link
                          to={`/edit-student/${student.id}`}
                          className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
                        >
                          ✏ Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(student.id)}
                          className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                        >
                          🗑 Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="4"
                    className="text-center p-6 text-gray-500"
                  >
                    No Student Found
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