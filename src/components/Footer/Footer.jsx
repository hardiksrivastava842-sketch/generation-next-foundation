function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Foundation Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Generation Next Foundation
          </h2>

          <p className="text-gray-400">
            Empowering students through quality computer education and skill development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Contact
          </h2>

          <p className="text-gray-400">
            📍 Gonda, Uttar Pradesh
          </p>

          <p className="text-gray-400">
            📞 +91 9453650995
          </p>

          <p className="text-gray-400">
            📧 gnextgonda@gmail.com
          </p>
        </div>

      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-gray-500">
        © 2026 Generation Next Foundation. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;