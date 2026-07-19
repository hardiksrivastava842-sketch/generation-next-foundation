function Statistics() {
  return (
    <section className="bg-gradient-to-r from-red-950 via-blue-900 to-red-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Our Impact
        </h2>

        <p className="text-center mt-4 text-blue-100">
          Together we are creating a brighter future through technology education.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          <div className="text-center">
            <h3 className="text-5xl font-bold">500+</h3>
            <p className="mt-3">Students Trained</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">20+</h3>
            <p className="mt-3">Computer Courses</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">95%</h3>
            <p className="mt-3">Success Rate</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">50+</h3>
            <p className="mt-3">Volunteers</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Statistics;