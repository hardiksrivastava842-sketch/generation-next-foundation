function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          About Generation Next Foundation
        </h2>

        <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
          Generation Next Foundation is dedicated to empowering students through
          free computer education, digital literacy, career guidance, and
          technology-based learning. Our mission is to prepare every student
          for the digital future.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-blue-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-blue-700">
              🎯 Mission
            </h3>

            <p className="mt-4 text-gray-600">
              To provide quality technology education for every student
              regardless of their financial background.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-purple-700">
              👁 Vision
            </h3>

            <p className="mt-4 text-gray-600">
              Build a digitally skilled generation capable of creating
              opportunities for themselves and society.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-green-700">
              💻 Our Work
            </h3>

            <p className="mt-4 text-gray-600">
              Computer training, coding workshops, career counseling,
              digital literacy, and practical technology education.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;