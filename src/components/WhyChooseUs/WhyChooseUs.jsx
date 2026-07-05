function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We are committed to providing quality computer education for every student.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center hover:scale-105 duration-300">
            <div className="text-5xl mb-4">👨‍🏫</div>
            <h3 className="text-2xl font-bold mb-2">
              Expert Trainers
            </h3>
            <p className="text-gray-600">
              Learn from experienced and professional instructors.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center hover:scale-105 duration-300">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-bold mb-2">
              Practical Learning
            </h3>
            <p className="text-gray-600">
              Hands-on practical sessions with real projects.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center hover:scale-105 duration-300">
            <div className="text-5xl mb-4">📜</div>
            <h3 className="text-2xl font-bold mb-2">
              Certification
            </h3>
            <p className="text-gray-600">
              Get recognized certificates after course completion.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center hover:scale-105 duration-300">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-2">
              Career Guidance
            </h3>
            <p className="text-gray-600">
              We help students build careers in the IT industry.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;