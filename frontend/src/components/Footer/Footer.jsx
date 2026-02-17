import { Facebook, Instagram, Twitter} from "lucide-react";
function Footer(){
    return(
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-4 gap-8">
                <h3 font-semibold text-lg mb-4>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                </ul>
                <div className="text-cenetr mt-8 border-t pt-4">
                    @copy 2026 ShopX. All rights reserved
                </div>
            </div>
        </footer>
    )
}
export default Footer;