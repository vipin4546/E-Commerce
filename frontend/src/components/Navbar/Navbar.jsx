import { ShoppingCart, User} from "lucide-react"
function Navbar(){
    return(
        <nav className="sticky top-0 h-16 shadow-md bg-white border-b px-6 py-3">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-wide">
                        ShopX
                    </h1>

                </div>
                <div className="flex-1 px-6">
                    <input className="w-full max-w-md flex-1 border px-5 py-2 rounded focus:outline-none" type="text" placeholder="Search..."/>
                </div>
                <div>
                    <ul className="flex gap-6  hover:cursor-pointer">
                        <li>Home</li>
                        <li>Return & orders</li>
                        <li>Contact</li>
                        <li>About</li>
                        
                    </ul>
                </div>
                <div className="flex items-center gap-6 ml-6">
                    <ShoppingCart />
                    <User />
                    <p>login</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;