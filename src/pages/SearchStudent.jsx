import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function SearchStudent() {
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
        console.log(error);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Search Student
        </h1>

        <input
          type="text"
          placeholder="Search by student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6"
        />
        <p className="mb-4 text-lg">
           Total Students: {filteredStudents.length}
         </p>
        <div className="bg-white rounded-lg shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b">

                    <td className="p-3">{student.name}</td>

                    <td className="p-3">{student.course}</td>

                    <td className="p-3">{student.mobile}</td>

                    <td className="p-3">
                      <Link
                        to={`/student/${student.id}`}
                        className="text-blue-600 hover:underline"
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
                    className="text-center p-5 text-red-500"
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

export default SearchStudent;