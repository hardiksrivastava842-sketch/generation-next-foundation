function Courses() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Our Courses
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We provide industry-ready computer education for students.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-3">
              💻 Computer Basics
            </h3>
            <p className="text-gray-600">
              Learn computer operations, typing, MS Office and Internet.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-3">
              🖥 Fundamentals of Computer
            </h3>
            <p className="text-gray-600">
              Understand hardware, software and operating systems.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-3">
              📘 CCC
            </h3>
            <p className="text-gray-600">
              Certificate Course in Computer Concepts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-3">
              🎓 O Level
            </h3>
            <p className="text-gray-600">
              Learn programming, web designing and IT skills.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Courses;