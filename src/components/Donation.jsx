import { useState } from "react";


function Donation() {
  const [formData, setFormData] = useState({
    
  name: "",
  email: "",
  mobile: "",
  amount: "",
  message: "",
  

  
});
const [showPayment, setShowPayment] = useState(false);
const [showVerification, setShowVerification] = useState(false);
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
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

          <div className="bg-blue-700 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Make a Donation
            </h2>

            <p className="mb-6">
              Every contribution makes a difference.
            </p>

            <input
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  className="w-full p-3 rounded-lg text-black mb-4"
/>
<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  className="w-full p-3 rounded-lg text-black mb-4"
  required
/>
<input
  type="text"
  name="mobile"
  placeholder="Mobile Number"
  value={formData.mobile}
  onChange={handleChange}
  className="w-full p-3 rounded-lg text-black mb-4"
  required
/>

<input
  type="number"
  name="amount"
  placeholder="Donation Amount (₹)"
  value={formData.amount}
  onChange={handleChange}
  className="w-full p-3 rounded-lg text-black mb-4"
  required
/>

<textarea
  name="message"
  placeholder="Message (Optional)"
  value={formData.message}
  onChange={handleChange}
  className="w-full p-3 rounded-lg text-black mb-4"
/>

<button
  type="button"
  onClick={() => setShowPayment(true)}
  className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100"
>
  Continue to Payment
</button>
{showPayment && (
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
{showPayment && (
  <div className="mt-8 border-t border-blue-400 pt-6">

    <h3 className="text-xl font-bold text-center mb-4">
      Scan & Donate
    </h3>

    <div className="flex justify-center">
      <img
        src="/donation-qr.jpg"
        alt="Donation QR"
        className="w-60 h-60 bg-white rounded-lg p-2"
      />
    </div>

    <div className="text-center mt-5">
      <p className="font-semibold">UPI ID</p>

      <p className="bg-white text-blue-700 inline-block px-4 py-2 rounded-lg mt-2">
        srivastava.mr@superyes@
      </p>
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