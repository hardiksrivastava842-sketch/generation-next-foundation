import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";


function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const docRef = doc(db, "students", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setStudent(docSnap.data());
        } else {
          alert("Student Not Found");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudent();
  }, [id]);

  if (!student) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Student Details
        </h1>

        <div className="space-y-5">

          <div>
            <h2 className="font-bold text-gray-700">Student Name</h2>
            <p>{student.name}</p>
          </div>

          <div>
            <h2 className="font-bold text-gray-700">Father Name</h2>
            <p>{student.fatherName}</p>
          </div>

          <div>
            <h2 className="font-bold text-gray-700">Mobile Number</h2>
            <p>{student.mobile}</p>
          </div>

          <div>
            <h2 className="font-bold text-gray-700">Email</h2>
            <p>{student.email}</p>
          </div>

          <div>
            <h2 className="font-bold text-gray-700">Course</h2>
            <p>{student.course}</p>
          </div>

           <div>
           <h2 className="font-bold text-gray-700">Date of Birth</h2>
           <p>{student.dob}</p>
           </div>

          <div>
            <h2 className="font-bold text-gray-700">Joining Date</h2>
            <p>{student.joiningDate}</p>
          </div>

          <div>
            <h2 className="font-bold text-gray-700">Address</h2>
            <p>{student.address}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;