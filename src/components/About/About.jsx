import about2 from "../../assets/about2.jpg";
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
<div className="grid lg:grid-cols-2 gap-12 items-center mt-16">

  <div>
    <img
      src={about2}
      alt="Generation Next Foundation"
      className="rounded-3xl shadow-xl w-full"
    />
  </div>

  <div>

    <h3 className="text-3xl font-bold text-blue-700 mb-6">
      Who We Are
    </h3>

    <p className="text-gray-600 leading-8 mb-5">
      Established in <b>2009</b>, Generation Next Foundation is a
      technology-focused non-profit organization located in
      <b> Gonda, Uttar Pradesh.</b>
    </p>

    <p className="text-gray-600 leading-8 mb-5">
      We provide computer education, digital literacy, typing,
      career guidance, and modern technology training for students.
    </p>

    <p className="text-gray-600 leading-8">
      We especially support students who cannot afford education.
      Through donations, we provide free learning opportunities,
      study materials, and access to modern technology so that
      every child has the chance to build a better future.
    </p>

  </div>

</div>
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
      <div className="grid md:grid-cols-3 gap-6 mt-16">

  <div className="bg-white border rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
    <h2 className="text-5xl font-bold text-blue-700">2009</h2>
    <p className="mt-3 text-gray-600 font-semibold">
      Established
    </p>
  </div>

  <div className="bg-white border rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
    <h2 className="text-5xl font-bold text-purple-700">
      Gonda
    </h2>
    <p className="mt-3 text-gray-600 font-semibold">
      Uttar Pradesh
    </p>
  </div>

  <div className="bg-white border rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
    <h2 className="text-5xl font-bold text-green-700">
      1000+
    </h2>
    <p className="mt-3 text-gray-600 font-semibold">
      Students Empowered
    </p>
  </div>

</div>
    </section>
  );
}

export default About;