function Gallery() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Our Gallery
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Moments from our training sessions and workshops.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <img
            src="https://picsum.photos/500/350?random=1"
            alt="Gallery"
            className="rounded-xl shadow-lg hover:scale-105 duration-300"
          />

          <img
            src="https://picsum.photos/500/350?random=2"
            alt="Gallery"
            className="rounded-xl shadow-lg hover:scale-105 duration-300"
          />

          <img
            src="https://picsum.photos/500/350?random=3"
            alt="Gallery"
            className="rounded-xl shadow-lg hover:scale-105 duration-300"
          />

          <img
            src="https://picsum.photos/500/350?random=4"
            alt="Gallery"
            className="rounded-xl shadow-lg hover:scale-105 duration-300"
          />

          <img
            src="https://picsum.photos/500/350?random=5"
            alt="Gallery"
            className="rounded-xl shadow-lg hover:scale-105 duration-300"
          />

          <img
            src="https://picsum.photos/500/350?random=6"
            alt="Gallery"
            className="rounded-xl shadow-lg hover:scale-105 duration-300"
          />

        </div>

      </div>

    </section>
  );
}

export default Gallery; 