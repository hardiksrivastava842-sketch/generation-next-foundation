import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    fatherName: "",
    mobile: "",
    email: "",
    course: "",
    joiningDate: "",
    address: "",
  });

  // Input Change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "students"), student);

      alert("✅ Student Added Successfully!");

      setStudent({
        name: "",
        fatherName: "",
        mobile: "",
        email: "",
        course: "",
        joiningDate: "",
        address: "",
      });
    } catch (error) {
      console.log(error);
      alert("❌ Error adding student");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Add New Student
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            value={student.fatherName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={student.mobile}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <select
            name="course"
            value={student.course}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option value="">Select Course</option>
            <option>Computer Basics</option>
            <option>Fundamentals of Computer</option>
            <option>CCC</option>
            <option>O Level</option>
          </select>

          <input
            type="date"
            name="joiningDate"
            value={student.joiningDate}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={student.address}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-lg md:col-span-2 hover:bg-blue-800"
          >
            Save Student
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddStudent;