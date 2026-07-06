function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-red-900">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-center text-4xl font-bold text-red-500">
          Generation Next Foundation
        </h1>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Generation Next Foundation
          <br />
          Designed & Developed by{" "}
          <span className="font-semibold text-red-500">
            Hardik and team 
          </span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;