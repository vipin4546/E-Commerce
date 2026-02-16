import { ShoppingCart, User} from "lucide-react"
function Navbar(){
    return(
        <nav className="sticky top-0 h-16 shadow-md bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">
                        ShopX
                    </h1>

                </div>
                <div className="flex-1 px-6">
                    <input className="w-full max-w-md flex-1 border px-4 py-2 rounded" type="text" placeholder="Search..."/>
                </div>
                <div>
                    <ul className="flex gap-6">
                        <li>Home</li>
                        <li>Return & orders</li>
                        <li>Contact</li>
                        <li>About</li>
                        
                    </ul>
                </div>
                <div>
                    <ShoppingCart />
                    </div>
                    <div>
                    <User />
                </div>
            </div>
        </nav>
    )
}
export default Navbar;