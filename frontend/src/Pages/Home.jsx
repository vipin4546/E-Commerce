import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import Categories from "../components/Categories/Categories"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import CategoryScrollBar from "../components/CategoryScrollBar/CategoryScrollBar"
function Home(){
    return (

<>
<Navbar />
<CategoryScrollBar />
<Hero />
<Categories />
<FeaturedProducts />
<Footer />
</>
    )
}

export default Home;