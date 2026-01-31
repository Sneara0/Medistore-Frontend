const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Your Trusted <br /> Online Medicine Shop
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow">
            Fast delivery, genuine medicines, easy checkout.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>

        {/* Right content (Image placeholder) */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-full shadow-2xl flex items-center justify-center text-gray-400 text-xl">
            Image
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
