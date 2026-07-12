import about2 from "../assets/about2.jpg";

function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-700">
            About Generation Next Foundation
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Generation Next Foundation is a technology-based NGO dedicated to
            empowering students through computer education, digital literacy,
            career guidance and modern skill development.
          </p>
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mt-20">

          {/* Image */}
          <div>
            <img
              src={about2}
              alt="Generation Next Foundation"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div>

            <h2 className="text-4xl font-bold text-blue-700 mb-8">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Established in <b>2009</b>, Generation Next Foundation is located
              in <b>Gonda, Uttar Pradesh</b>. We believe that technology
              education can transform lives and create better opportunities for
              every student.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              We provide computer education, coding, digital literacy,
              personality development, career guidance, typing courses and
              practical technology training.
            </p>

            <p className="text-gray-600 leading-8">
              Thousands of financially weaker students dream of learning but
              cannot afford education. Through donations and community support,
              we provide free learning opportunities, study materials and access
              to modern technology.
            </p>

          </div>

        </div>

        {/* Mission Vision Work */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              🎯 Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To provide quality technology education and digital skills to
              every student regardless of financial background.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              👁 Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To build a digitally empowered generation capable of creating
              opportunities for themselves and society.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              💻 Our Work
            </h3>

            <p className="text-gray-600 leading-7">
              Computer training, coding, digital literacy, typing,
              personality development, workshops and career guidance.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-blue-700 text-white rounded-3xl p-8 text-center shadow-xl">
            <h2 className="text-5xl font-bold">2009</h2>
            <p className="mt-3 text-lg">Established</p>
          </div>

          <div className="bg-purple-700 text-white rounded-3xl p-8 text-center shadow-xl">
            <h2 className="text-5xl font-bold">Gonda</h2>
            <p className="mt-3 text-lg">Uttar Pradesh</p>
          </div>

          <div className="bg-green-700 text-white rounded-3xl p-8 text-center shadow-xl">
            <h2 className="text-5xl font-bold">1000+</h2>
            <p className="mt-3 text-lg">Students Empowered</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;