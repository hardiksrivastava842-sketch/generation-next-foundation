import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Donation() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
    message: "",
  });

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
        ...formData,
        utr,
        paidAmount,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      setStep(4);
    } catch (error) {
      console.error(error);
      alert("Failed to submit donation.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-5">

        <h1 className="text-5xl font-bold text-center text-blue-700">
          Support Our Mission
        </h1>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          Your contribution helps Generation Next Foundation provide free
          education, digital literacy and skill development to students.
        </p>

        <div className="mt-10 bg-white rounded-3xl shadow-xl p-8">

          {/* STEP 1 */}

          {step === 1 && (
            <>
              <h2 className="text-3xl font-bold text-blue-700 mb-6">
                Donor Details
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                />

                <input
                  type="number"
                  name="amount"
                  placeholder="Donation Amount (₹)"
                  value={formData.amount}
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                />

              </div>

              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-xl p-4 w-full mt-5 h-32"
              />

              <button
                onClick={() => setStep(2)}
                className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold text-lg"
              >
                Continue to Payment
              </button>
            </>
          )}
                    {/* STEP 2 */}

          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                Scan & Donate
              </h2>

              <div className="flex justify-center">
                <img
                  src="/donation-qr.jpg"
                  alt="Donation QR"
                  className="w-72 h-72 bg-white rounded-2xl shadow-lg p-3 border"
                />
              </div>

              <div className="text-center mt-6">

                <p className="text-lg font-semibold text-gray-700">
                  UPI ID
                </p>

                <div className="inline-block mt-3 px-6 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg">
                  srivastava.mr@superyes
                </div>

                <p className="mt-5 text-gray-600 max-w-xl mx-auto">
                  Scan this QR Code using any UPI application like
                  PhonePe, Google Pay, Paytm or BHIM and complete your donation.
                </p>

              </div>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 border-2 border-blue-700 text-blue-700 py-4 rounded-xl font-bold hover:bg-blue-50"
                >
                  Back
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold"
                >
                  Done Payment
                </button>

              </div>
            </>
          )}
                    {/* STEP 3 */}

          {step === 3 && (
            <>
              <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
                Payment Verification
              </h2>

              <p className="text-center text-gray-600 mb-8">
                Please enter your payment details for verification.
              </p>

              <input
                type="text"
                placeholder="Enter UTR / Transaction ID"
                value={utr}
                onChange={(e) => setUtr(e.target.value)}
                className="w-full border rounded-xl p-4 mb-5 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="number"
                placeholder="Amount Paid (₹)"
                value={paidAmount}
                onChange={(e) => setPaidAmount(e.target.value)}
                className="w-full border rounded-xl p-4 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <div className="flex gap-4">

                <button
                  onClick={() => setStep(2)}
                  className="w-1/2 border-2 border-blue-700 text-blue-700 py-4 rounded-xl font-bold hover:bg-blue-50"
                >
                  Back
                </button>

                <button
                  onClick={saveDonation}
                  disabled={!utr.trim() || !paidAmount.trim()}
                  className={`w-1/2 py-4 rounded-xl font-bold transition ${
                    utr.trim() && paidAmount.trim()
                      ? "bg-blue-700 hover:bg-blue-800 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit Verification
                </button>

              </div>
            </>
          )}
                    {/* STEP 4 */}

          {step === 4 && (
            <>
              <div className="text-center py-10">

                <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-5xl text-green-600">✓</span>
                </div>

                <h2 className="text-4xl font-bold text-green-700 mt-6">
                  Payment Submitted Successfully
                </h2>

                <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                  Thank you for supporting Generation Next Foundation.
                  Your payment details have been received successfully.
                </p>

                <div className="mt-8 bg-yellow-50 border border-yellow-300 rounded-2xl p-6 max-w-2xl mx-auto">

                  <h3 className="text-2xl font-bold text-yellow-700">
                    Waiting for Admin Verification
                  </h3>

                  <p className="mt-3 text-gray-700">
                    Our team will verify your payment shortly.
                    Once verified, you will receive a confirmation email
                    and your donation certificate.
                  </p>

                </div>

                <button
                  onClick={() => {
                    setStep(1);

                    setFormData({
                      name: "",
                      email: "",
                      mobile: "",
                      amount: "",
                      message: "",
                    });

                    setUtr("");
                    setPaidAmount("");
                  }}
                  className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold"
                >
                  Make Another Donation
                </button>

              </div>
            </>
          )}

        </div>

      </div>
    </section>
  );
}

export default Donation;