function Hero() {
  return (
    <section className="bg-gradient-to-r from-black via-blue-900 to-purple-700 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Empowering Students
            <br />
            Through Technology
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Generation Next Foundation helps students learn computer
            skills, digital literacy, and modern technology to build
            a better future.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Explore Programs
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Students Learning"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;