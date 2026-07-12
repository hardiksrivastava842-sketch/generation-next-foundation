import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

function DonationRequests() {
  const [donations, setDonations] = useState([]);

  const fetchDonations = async () => {
    const snapshot = await getDocs(collection(db, "donations"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setDonations(data);
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const approveDonation = async (id) => {
    await updateDoc(doc(db, "donations", id), {
      status: "Approved",
    });

    fetchDonations();
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Donation Requests
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Mobile</th>
              <th className="p-4">Amount</th>
              <th className="p-4">UTR</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {donations.length === 0 ? (

              <tr>
                <td colSpan="7" className="text-center p-6">
                  No Donation Found
                </td>
              </tr>

            ) : (

              donations.map((donation) => (

                <tr
                  key={donation.id}
                  className="border-b text-center"
                >
                  <td className="p-4">{donation.name}</td>

                  <td className="p-4">{donation.email}</td>

                  <td className="p-4">{donation.mobile}</td>

                  <td className="p-4">
                    ₹{donation.paidAmount}
                  </td>

                  <td className="p-4">
                    {donation.utr}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        donation.status === "Approved"
                          ? "bg-green-600"
                          : "bg-orange-500"
                      }`}
                    >
                      {donation.status}
                    </span>

                  </td>

                  <td className="p-4">

                    {donation.status === "Pending" && (
                      <button
                        onClick={() =>
                          approveDonation(donation.id)
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        Approve
                      </button>
                    )}

                  </td>
                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DonationRequests;