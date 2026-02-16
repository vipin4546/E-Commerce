import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import Categories from "../components/Categories/Categories"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import CategoryScrollBar from "../components/CategoryScrollBar/CategoryScrollBar"
import Products from "../components/Products/Products"
import OfferBanner from "../components/OfferBanner/OfferBanner"
import Benefits from "../components/Benefits/Benefits"
function Home(){
    return (

<>
<Navbar />
<CategoryScrollBar />
<Hero />
<Products />
<OfferBanner />
<Benefits />
<Footer />
</>
    )
}

export default Home;