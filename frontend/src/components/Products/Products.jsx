import products from "../../data/product.js";
import CategoryScrollBar from "../CategoryScrollBar/CategoryScrollBar.jsx";
function Products({ selectedCategory,setCartItems,cartItems }) {
  function addToCart(product){
    const existing = cartItems.find(item=>{return product.id === item.id})
    if(existing){
      return
    }
    setCartItems([...cartItems,product])
  }
  const filteredProducts =
    selectedCategory == "All"
      ? products
      : products.filter((product) => product.category === selectedCategory );

  return (
    <section className="py-12 mt-10 mb-10 px-6">
      <div className="grid grid-cols-5  grid-rows-3 gap-1">
        {filteredProducts.map((product) => {
          return (
            <div key={product.id}>
              <div
                className="border rounded-xl p-4 hover:shadow-lg transition"
                key={product.id}
              >
                <img
                  className="w-full h-40 object-contain"
                  src={product.image}
                />
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-gray-600 font-bold">₹{product.price}</p>
                <button className="font-semibold border" onClick = {()=>{addToCart(product)}}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Products;
