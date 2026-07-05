function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-red-900 to-red-700 text-white">
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
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-white text-black outline-none border border-red-300 focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-white text-black outline-none border border-red-300 focus:ring-2 focus:ring-red-500"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-4 rounded-lg bg-white text-black outline-none border border-red-300 focus:ring-2 focus:ring-red-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
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