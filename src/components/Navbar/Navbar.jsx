function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">
          Generation Next Foundation
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-700 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 cursor-pointer">About</li>
          <li className="hover:text-blue-700 cursor-pointer">Courses</li>
          <li className="hover:text-blue-700 cursor-pointer">Students</li>
          <li className="hover:text-blue-700 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
          Admin Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;