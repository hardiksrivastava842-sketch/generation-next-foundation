import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
function AdminDonation() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);
  const updateStatus = async (id, status) => {
  try {
    await updateDoc(doc(db, "donations", id), {
      status: status,
    });

    fetchDonations();

    alert("Status updated successfully.");
  } catch (error) {
    console.log(error);
  }
};

  const fetchDonations = async () => {
    const q = query(
      collection(db, "donations"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setDonations(list);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Donation Requests
      </h1>

      <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Mobile</th>
              <th className="p-4">Amount</th>
              <th className="p-4">UTR</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((donation) => (
              <tr
                key={donation.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{donation.name}</td>
                <td className="p-4">{donation.email}</td>
                <td className="p-4">{donation.mobile}</td>
                <td className="p-4">₹{donation.paidAmount}</td>
                <td className="p-4">{donation.utr}</td>
               <td className="p-4">
  {donation.status === "Pending" && (
    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
      Pending
    </span>
  )}

  {donation.status === "Approved" && (
    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
      Approved
    </span>
  )}

  {donation.status === "Rejected" && (
    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
      Rejected
    </span>
  )}
  <th className="p-4">Status</th>
  <th className="p-4">Action</th>
  <td className="p-4">
  <div className="flex gap-2">

    <button
      onClick={() => updateStatus(donation.id, "Approved")}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
    >
      Approve
    </button>

    <button
      onClick={() => updateStatus(donation.id, "Rejected")}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
    >
      Reject
    </button>

  </div>
</td>
</td>
              </tr>
            ))}

            {donations.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center p-8 text-gray-500"
                >
                  No donation requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDonation;