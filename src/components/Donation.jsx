import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Donation() {
  const [formData, setFormData] = useState({
    
  name: "",
  email: "",
  mobile: "",
  amount: "",
  message: "",
  

  
});

const [step, setStep] = useState(1);
const [utr, setUtr] = useState("");
const [paidAmount, setPaidAmount] = useState("");
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const saveDonation = async () => {
  try {
    await addDoc(collection(db, "donations"), {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      donationAmount: formData.amount,
      message: formData.message,

      utr: utr,
      paidAmount: paidAmount,

      status: "Pending",

      createdAt: serverTimestamp(),
    });

    alert("Donation submitted successfully!");

    setStep(4);

  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-6">
          Support Our Mission
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
          Your donation helps Generation Next Foundation provide free education,
          digital literacy, career guidance, and skill development to students
          who cannot afford quality education.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Why Donate?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>✓ Free Computer Education</li>
              <li>✓ Books & Study Material</li>
              <li>✓ Digital Literacy Programs</li>
              <li>✓ Scholarships for Needy Students</li>
              <li>✓ Skill Development Workshops</li>
            </ul>
          </div>

           <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-10">
           <h2 className="text-4xl font-bold text-white mb-2">
  Make a Donation
</h2>

<p className="text-blue-100 text-lg mb-8">
  Every contribution helps us educate and empower students.
</p>

  
<input
  type="text"
  name="name"
  placeholder="Enter your full name"
  value={formData.name}
  onChange={handleChange}
  className="w-full px-5 py-4 mb-5 rounded-xl bg-white text-gray-800 placeholder-gray-500 border border-white/30 shadow focus:ring-4 focus:ring-blue-300 outline-none"
/>

<input
  type="email"
  name="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
  className="w-full px-5 py-4 mb-5 rounded-xl bg-white text-gray-800 placeholder-gray-500 border border-white/30 shadow focus:ring-4 focus:ring-blue-300 outline-none"
/>

<input
  type="text"
  name="mobile"
  placeholder="Enter mobile number"
  value={formData.mobile}
  onChange={handleChange}
  className="w-full px-5 py-4 mb-5 rounded-xl bg-white text-gray-800 placeholder-gray-500 border border-white/30 shadow focus:ring-4 focus:ring-blue-300 outline-none"
/>

<input
  type="number"
  name="amount"
  placeholder="Donation Amount (₹)"
  value={formData.amount}
  onChange={handleChange}
  className="w-full px-5 py-4 mb-5 rounded-xl bg-white text-gray-800 placeholder-gray-500 border border-white/30 shadow focus:ring-4 focus:ring-blue-300 outline-none"
/>

<textarea
  name="message"
  rows="4"
  placeholder="Write your message..."
  value={formData.message}
  onChange={handleChange}
  className="w-full px-5 py-4 mb-6 rounded-xl bg-white text-gray-800 placeholder-gray-500 border border-white/30 shadow focus:ring-4 focus:ring-blue-300 outline-none"
/>


<button
  type="button"
  onClick={() => setStep(2)}
  className="w-full py-4 rounded-xl bg-white text-blue-700 font-bold text-xl shadow-lg hover:bg-blue-50 hover:scale-[1.02] transition duration-300"
>
  Continue to Payment
</button>
{step === 2 && (
  
  <div className="mt-8 border-t border-blue-300 pt-6">

    <h3 className="text-2xl font-bold text-center mb-6">
      Scan QR Code
    </h3>

    <div className="flex justify-center">
      <img
        src="/donation-qr.jpg"
        alt="Donation QR"
        className="w-64 h-64 bg-white rounded-lg shadow-lg p-2"
      />
    </div>

    <div className="text-center mt-6">
      <p className="font-semibold text-lg">
        UPI ID
      </p>

      <p className="bg-white text-blue-700 inline-block px-4 py-2 rounded-lg mt-2 font-bold">
      srivastava.mr@superyes
      </p>
    </div>

  </div>
)}
<p className="text-blue-100 mt-4 text-center">
Scan using any UPI App like PhonePe, Google Pay, Paytm or BHIM.
</p>
<div className="text-center mt-8">
  <button
   onClick={() => setStep(3)}
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition"
  >
    ✅ Done
  </button>
</div>
{step === 3 && (

<div className="mt-8 bg-white rounded-2xl p-6 shadow-xl">

<h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
Payment Verification
</h3>

<p className="text-gray-600 text-center mb-6">
Please enter your payment details for verification.
</p>

<input
type="text"
placeholder="Enter UTR Number"
value={utr}
onChange={(e)=>setUtr(e.target.value)}
className="w-full border rounded-xl p-4 mb-4"
/>

<input
type="number"
placeholder="Amount Paid (₹)"
value={paidAmount}
onChange={(e)=>setPaidAmount(e.target.value)}
className="w-full border rounded-xl p-4 mb-6"
/>

<button
  onClick={saveDonation}
  disabled={!utr.trim() || !paidAmount.trim()}
  className={`w-full py-4 rounded-xl font-bold mt-4 transition ${
    utr.trim() && paidAmount.trim()
      ? "bg-blue-700 hover:bg-blue-800 text-white"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Submit Verification
</button>
</div>

)}
{step === 4 && (

<div className="mt-8 bg-green-50 border border-green-300 rounded-2xl p-8 text-center">

<h3 className="text-3xl font-bold text-green-700 mb-4">
🎉 Payment Submitted
</h3>

<p className="text-lg text-gray-700">
Your payment details have been submitted successfully.
</p>

<p className="mt-3 text-gray-600">
Your donation is currently under <b>Admin Verification</b>.
</p>

<p className="mt-2 text-gray-600">
After verification, your donation will be confirmed.
</p>

<div className="mt-6 bg-yellow-100 text-yellow-800 py-3 rounded-xl font-semibold">
⏳ Status : Waiting for Admin Verification
</div>

</div>

)}



          </div>

        </div>

      </div>
    </section>
  );
}
export default Donation;