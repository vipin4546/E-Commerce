import {useState} from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import CategoryScrollBar from "../components/CategoryScrollBar/CategoryScrollBar"
import Products from "../components/Products/Products"
import OfferBanner from "../components/OfferBanner/OfferBanner"
import Benefits from "../components/Benefits/Benefits"
function Home(){
    const[selectedCategory,setSelectedCategory] = useState("All")
    const[searchTerm, setSearchTerm] = useState("")
    const[cartItems,setCartItems] = useState([])
   
    return (

<>
<Navbar serchTerm = {searchTerm} setSearchTerm = {setSearchTerm} cartItems = {cartItems}  />
<CategoryScrollBar selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory}/>
<Hero />
<Products selectedCategory={selectedCategory} setCartItems={setCartItems} cartItems = {cartItems} />
<OfferBanner />
<Benefits />
<Footer />
</>
    )
}

export default Home;