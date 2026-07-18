
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-700 cursor-pointer">
            Generation Next Foundation
          </h1>
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-medium text-gray-700">

          <li>
            <Link
              to="/"
              className="hover:text-purple-700 transition"
            >
              Home
            </Link>
          </li>

         <li>
  <Link
    to="/about"
    className="hover:text-purple-700 transition"
  >
    About
  </Link>
</li>
          <li>
            <Link
              to="/donation"
              className="hover:text-purple-700 transition"
            >
              Donation
            </Link>
          </li>

          <li>
            <a
              href="/#courses"
              className="hover:text-purple-700 transition"
            >
              Courses
            </a>
          </li>

          <li>
            <a
              href="/#students"
              className="hover:text-purple-700 transition"
            >
              Students
            </a>
          </li>

          <li>
            <a
              href="/#contact"
              className="hover:text-purple-700 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Admin Login */}
        {location.pathname === "/" && (
  <Link to="/login">
    <button className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition duration-300">
      Admin Login
    </button>
  </Link>
)}

      </div>
    </nav>
  );
}

export default Navbar;