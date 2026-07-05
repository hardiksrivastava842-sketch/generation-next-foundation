function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-red-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Foundation Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Generation Next Foundation
          </h2>

          <p className="text-gray-400">
            Empowering students through quality computer education and skill
            development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-red-400 cursor-pointer">Home</li>
            <li className="hover:text-red-400 cursor-pointer">About</li>
            <li className="hover:text-red-400 cursor-pointer">Courses</li>
            <li className="hover:text-red-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-4">
            Contact
          </h2>

          <p className="text-gray-400 mb-2">
            📍 Gonda, Uttar Pradesh
          </p>

          <p className="text-gray-400 mb-2">
            📞 +91 9453650995
          </p>

          <p className="text-gray-400">
            📧 gnextgonda@gmail.com
          </p>
        </div>

      </div>

      <hr className="my-8 border-red-900" />

      <div className="text-center space-y-2">
        <p className="text-gray-500">
          © 2026 Generation Next Foundation. All Rights Reserved.
        </p>

        <p className="text-sm text-red-500 font-medium">
          Designed &amp; Developed by Hardik Srivastava ❤️
        </p>
      </div>

    </footer>
  );
}

export default Footer;