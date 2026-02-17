function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-white py-5">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex gap-10 items-center">
          <div className="text block space-y-6">
            <h1 className="text-6xl font-extrabold leading-tight text-black ">
              Big sale
            </h1>
            <p className="text-gray-600">Up to 50% Off</p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition">
              Shop Now
            </button>
          </div>

          <div className="image flex justify-end">
            <img
              className="w-full max-w-xl drop-shadow-xl object-contain"
              src="banner.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
