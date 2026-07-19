import Navbar from "../components/Navbar/Navbar";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
  <>
    <Navbar />

    <section className="bg-gray-50">

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <p className="uppercase tracking-[5px] text-blue-100 font-semibold">
                Welcome To
              </p>

              <h1 className="text-6xl font-extrabold leading-tight mt-4">
                Generation Next Foundation
              </h1>

              <p className="mt-8 text-xl leading-9 text-blue-100">

                Generation Next Foundation is a technology-driven NGO
                committed to empowering students through quality
                computer education, digital literacy, career guidance,
                typing skills, coding education and personality
                development.

              </p>

              <div className="flex gap-5 mt-10">

                <Link to="/donation">

                  <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">

                    Donate Now

                  </button>

                </Link>

                <a href="#who">

                  <button className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">

                    Learn More

                  </button>

                </a>

              </div>

            </div>

            {/* Right */}

            <div>

              <img
                src={about1}
                alt="Generation Next Foundation"
                className="rounded-3xl shadow-2xl w-full"
              />

            </div>

          </div>

        </div>

      </div>
            {/* Who We Are */}

      <div
        id="who"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div>
            <img
              src={about2}
              alt="Who We Are"
              className="rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}

          <div>

            <span className="text-blue-700 font-bold uppercase tracking-[4px]">
              About Us
            </span>

            <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
              Empowering Students Through Technology
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Generation Next Foundation is a non-profit organization
              dedicated to transforming lives through quality education,
              digital literacy and modern technology training.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-6">
              Since our establishment in <b>2009</b>, we have been
              providing affordable and free learning opportunities for
              students from financially weaker backgrounds. Our mission
              is to bridge the digital divide and prepare every student
              for the future.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white rounded-2xl shadow-lg p-6">

                <h3 className="text-4xl font-bold text-blue-700">
                  1000+
                </h3>

                <p className="text-gray-600 mt-2">
                  Students Trained
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">

                <h3 className="text-4xl font-bold text-green-600">
                  15+
                </h3>

                <p className="text-gray-600 mt-2">
                  Years Experience
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">

                <h3 className="text-4xl font-bold text-purple-700">
                  25+
                </h3>

                <p className="text-gray-600 mt-2">
                  Professional Courses
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">

                <h3 className="text-4xl font-bold text-purple-700">
                  100%
                </h3>

                <p className="text-gray-600 mt-2">
                  Practical Learning
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>      {/* Mission Vision Values */}

      <div className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-700 font-bold uppercase tracking-[4px]">
              Our Foundation
            </span>

            <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
              Mission, Vision & Core Values
            </h2>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
              Our organization is committed to creating equal learning
              opportunities for every student through quality education,
              technology and innovation.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10 mt-16">

            {/* Mission */}

            <div className="bg-blue-50 rounded-3xl shadow-xl p-10 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <div className="text-6xl">🎯</div>

              <h3 className="text-3xl font-bold text-blue-700 mt-6">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-8 mt-6">
                To provide quality computer education, coding,
                digital literacy, personality development,
                career guidance and modern technology training
                for every student irrespective of financial background.
              </p>

            </div>

            {/* Vision */}

            <div className="bg-purple-50 rounded-3xl shadow-xl p-10 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <div className="text-6xl">👁️</div>

              <h3 className="text-3xl font-bold text-purple-700 mt-6">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-8 mt-6">
                To build a digitally empowered society where
                every student has access to technology,
                education and opportunities to build
                a successful future.
              </p>

            </div>

            {/* Values */}

            <div className="bg-green-50 rounded-3xl shadow-xl p-10 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <div className="text-6xl">❤️</div>

              <h3 className="text-3xl font-bold text-green-700 mt-6">
                Core Values
              </h3>

              <ul className="text-gray-600 leading-8 mt-6 space-y-3">

                <li>✔ Quality Education</li>

                <li>✔ Innovation & Technology</li>

                <li>✔ Equal Opportunities</li>

                <li>✔ Student Empowerment</li>

                <li>✔ Transparency & Trust</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
            {/* Our Impact */}

      <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center text-white">

            <span className="uppercase tracking-[4px] font-semibold">
              Our Impact
            </span>

            <h2 className="text-5xl font-extrabold mt-4">
              Transforming Lives Every Year
            </h2>

            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-8">
              Our journey is measured by the lives we transform through
              technology, education and community support.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {/* Students */}

            <div className="bg-white rounded-3xl p-10 text-center shadow-2xl hover:-translate-y-3 transition">

              <div className="text-6xl mb-4">🎓</div>

              <h3 className="text-5xl font-extrabold text-blue-700">
                1000+
              </h3>

              <p className="text-gray-600 mt-4 font-semibold">
                Students Trained
              </p>

            </div>

            {/* Courses */}

            <div className="bg-white rounded-3xl p-10 text-center shadow-2xl hover:-translate-y-3 transition">

              <div className="text-6xl mb-4">💻</div>

              <h3 className="text-5xl font-extrabold text-purple-700">
                25+
              </h3>

              <p className="text-gray-600 mt-4 font-semibold">
                Professional Courses
              </p>

            </div>

            {/* Experience */}

            <div className="bg-white rounded-3xl p-10 text-center shadow-2xl hover:-translate-y-3 transition">

              <div className="text-6xl mb-4">🏆</div>

              <h3 className="text-5xl font-extrabold text-green-700">
                15+
              </h3>

              <p className="text-gray-600 mt-4 font-semibold">
                Years of Service
              </p>

            </div>

            {/* Success */}

            <div className="bg-white rounded-3xl p-10 text-center shadow-2xl hover:-translate-y-3 transition">

              <div className="text-6xl mb-4">⭐</div>

              <h3 className="text-5xl font-extrabold text-purple-700">
                98%
              </h3>

              <p className="text-gray-600 mt-4 font-semibold">
                Student Satisfaction
              </p>

            </div>

          </div>

        </div>

      </div>
            {/* Why Choose Us */}

      <div className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-700 uppercase tracking-[4px] font-bold">
              Why Choose Us
            </span>

            <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
              Why Generation Next Foundation?
            </h2>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
              We are committed to delivering quality education through modern
              technology, experienced mentors and practical learning methods
              that prepare students for real-world opportunities.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-3 transition duration-300">
              <div className="text-5xl">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-blue-700 mt-6">
                Expert Trainers
              </h3>
              <p className="text-gray-600 mt-4 leading-7">
                Learn from experienced trainers with practical industry knowledge.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-3 transition duration-300">
              <div className="text-5xl">💻</div>
              <h3 className="text-2xl font-bold text-purple-700 mt-6">
                Practical Learning
              </h3>
              <p className="text-gray-600 mt-4 leading-7">
                Hands-on computer training, coding and live project experience.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-3 transition duration-300">
              <div className="text-5xl">🎓</div>
              <h3 className="text-2xl font-bold text-green-700 mt-6">
                Free Education
              </h3>
              <p className="text-gray-600 mt-4 leading-7">
                Supporting financially weaker students with quality education.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-3 transition duration-300">
              <div className="text-5xl">🌍</div>
              <h3 className="text-2xl font-bold text-orange-600 mt-6">
                Community Development
              </h3>
              <p className="text-gray-600 mt-4 leading-7">
                Creating opportunities that uplift students and communities.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-3 transition duration-300">
              <div className="text-5xl">🚀</div>
              <h3 className="text-2xl font-bold text-purple-700 mt-6">
                Modern Technology
              </h3>
              <p className="text-gray-600 mt-4 leading-7">
                Training students using modern tools and digital platforms.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-3 transition duration-300">
              <div className="text-5xl">📈</div>
              <h3 className="text-2xl font-bold text-indigo-700 mt-6">
                Career Guidance
              </h3>
              <p className="text-gray-600 mt-4 leading-7">
                Helping students build confidence and achieve successful careers.
              </p>
            </div>

          </div>

        </div>

      </div> 
            {/* Our Programs */}

      <div className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-700 uppercase tracking-[4px] font-bold">
              Our Programs
            </span>

            <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
              Programs We Offer
            </h2>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
              We provide modern technology education, digital skills and career
              development programs that help students become confident,
              skilled and job-ready.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {/* Computer Education */}

            <div className="bg-blue-50 rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-6xl">🖥️</div>

              <h3 className="text-2xl font-bold text-blue-700 mt-6">
                Computer Education
              </h3>

              <p className="text-gray-600 mt-5 leading-7">
                Basic to advanced computer courses designed for school,
                college students and beginners.
              </p>

            </div>

            {/* Coding */}

            <div className="bg-purple-50 rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-6xl">💻</div>

              <h3 className="text-2xl font-bold text-purple-700 mt-6">
                Coding & Web Development
              </h3>

              <p className="text-gray-600 mt-5 leading-7">
                Learn HTML, CSS, JavaScript, React and practical web
                development skills.
              </p>

            </div>

            {/* Typing */}

            <div className="bg-green-50 rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-6xl">⌨️</div>

              <h3 className="text-2xl font-bold text-green-700 mt-6">
                Typing Courses
              </h3>

              <p className="text-gray-600 mt-5 leading-7">
                English and Hindi typing practice with speed, accuracy
                and certification support.
              </p>

            </div>

            {/* Digital Literacy */}

            <div className="bg-yellow-50 rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-6xl">🌐</div>

              <h3 className="text-2xl font-bold text-yellow-600 mt-6">
                Digital Literacy
              </h3>

              <p className="text-gray-600 mt-5 leading-7">
                Internet, email, online safety and digital tools to help
                students succeed in today's world.
              </p>

            </div>

            {/* Career */}

            <div className="bg-red-50 rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-6xl">📈</div>

              <h3 className="text-2xl font-bold text-purple-700 mt-6">
                Career Guidance
              </h3>

              <p className="text-gray-600 mt-5 leading-7">
                Expert mentoring, interview preparation and career planning
                for students and job seekers.
              </p>

            </div>

            {/* Workshops */}

            <div className="bg-indigo-50 rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-6xl">🎤</div>

              <h3 className="text-2xl font-bold text-indigo-700 mt-6">
                Workshops & Seminars
              </h3>

              <p className="text-gray-600 mt-5 leading-7">
                Regular workshops on technology, communication skills,
                innovation and entrepreneurship.
              </p>

            </div>

          </div>

        </div>

      </div>
            {/* Support Our Mission */}

      <div className="py-24 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-[40px] shadow-2xl p-14 text-center">

            <span className="text-blue-700 uppercase tracking-[4px] font-bold">
              Join Our Mission
            </span>

            <h2 className="text-5xl font-extrabold text-gray-900 mt-5">
              Together We Can Transform Lives
            </h2>

            <p className="text-gray-600 text-lg leading-9 max-w-4xl mx-auto mt-8">

              Every child deserves an opportunity to learn, grow and build a
              successful future. Your contribution helps us provide free
              computer education, digital literacy, coding classes, typing
              training and career guidance to students who cannot afford
              quality education.

            </p>

            <p className="text-gray-600 text-lg leading-9 max-w-4xl mx-auto mt-6">

              By supporting Generation Next Foundation, you become a part of
              a movement that empowers young minds with knowledge, confidence
              and modern technology.

            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">

              <Link to="/donation">

                <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl text-lg font-bold transition duration-300">

                  ❤️ Donate Now

                </button>

              </Link>

              <Link to="/contact">

                <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-10 py-4 rounded-xl text-lg font-bold transition duration-300">

                  📞 Contact Us

                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>
      {/* Our Gallery */}

<div className="py-24 bg-gray-100">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="text-blue-700 uppercase tracking-[4px] font-bold">
        Gallery
      </span>

      <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
        Moments That Inspire
      </h2>

      <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
        Every picture reflects our commitment to empowering students
        through education, technology and community support.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      <img
        src={about1}
        alt="Gallery"
        className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
      />

      <img
        src={about2}
        alt="Gallery"
        className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
      />

    </div>

  </div>

</div>
{/* Founder Message */}

<div className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold text-blue-700">
      Message From The Foundation
    </h2>

    <p className="mt-10 text-xl leading-10 text-gray-600">

      "Education is the most powerful tool to change lives.
      At Generation Next Foundation, we believe every student
      deserves an opportunity to learn modern technology,
      develop practical skills and build a brighter future.
      Together, we can make quality education accessible
      for every child."

    </p>

    <h3 className="mt-10 text-2xl font-bold text-gray-800">
      Generation Next Foundation
    </h3>

  </div>

</div>
     </section>
  </>
  );
}

export default About;