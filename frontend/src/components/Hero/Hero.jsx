function Hero(){
    return(
        <section className="flex items-center justify-between max-w-7xl mx-auto px-6">
   <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

            <div>
                {/*text content*/}
            <h1 className="text-5xl font-bold text-gray-600">Big sale</h1>
            <p>Up to 50% Off</p>
            <button className="bg-black text-white px-6 py-2 rounded">Shop Now</button>
            
           
                {/* image */}
                <img className ="w-full max-w-md object-contain"src="banner.png" />
            </div>
            
     </div>
        </section>
    )
}
export default Hero;