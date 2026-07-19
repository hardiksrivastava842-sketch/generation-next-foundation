import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: new Date().toLocaleString(),
      });

      alert("✅ Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("❌ Failed to send message.");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-black via-blue-900 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Contact Us
        </h2>

        <p className="text-center mb-12 text-red-100">
          Have any questions? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div>

            <h3 className="text-3xl font-bold mb-6 text-red-300">
              Generation Next Foundation
            </h3>

            <p className="mb-5 text-lg">
              📍 Awas Vikas Colony, Patel Nagar,
              <br />
              Gonda, Uttar Pradesh - 271001
            </p>

            <p className="mb-5 text-lg">
              📞 +91 9453650995
            </p>

            <p className="mb-5 text-lg">
              📧 gnextgonda@gmail.com
            </p>

            <p className="mb-5 text-lg">
              📷 Instagram: @gnfclasses
            </p>

            <p className="mt-8 text-red-200">
              Empowering students through quality computer education and skill
              development.
            </p>

          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-white text-black outline-none border border-red-300 focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-white text-black outline-none border border-red-300 focus:ring-2 focus:ring-red-500"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-white text-black outline-none border border-red-300 focus:ring-2 focus:ring-red-500"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-white text-black outline-none border border-red-300 focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-lg font-bold duration-300 shadow-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;