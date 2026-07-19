import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function ContactRequests() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setMessages(data);
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-blue-700 mb-8">
        Contact Requests
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-300">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Mobile</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Date</th>
            </tr>

          </thead>

          <tbody>

            {messages.map((msg) => (

              <tr key={msg.id} className="hover:bg-gray-100">

                <td className="border p-3">{msg.name}</td>

                <td className="border p-3">{msg.email}</td>

                <td className="border p-3">{msg.mobile}</td>

                <td className="border p-3">{msg.message}</td>

                <td className="border p-3">
                  {msg.createdAt?.toDate
                    ? msg.createdAt.toDate().toLocaleString()
                    : msg.createdAt}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ContactRequests; 