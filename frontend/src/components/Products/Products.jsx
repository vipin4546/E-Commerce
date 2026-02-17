import product from "../../data/product.js";
function Products() {
  return (
    <section className="py-12 mt-10 mb-10 px-6">
      <div className="grid grid-cols-5  gap-1">
        {product.map((product) => {
          return (
            <div key={product.id}>
              <div className="border rounded-xl p-4 hover:shadow-lg transition" key={product.id}>
                <img
                  className="w-full h-40 object-contain"
                  src={product.image}
                />
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-gray-600 font-bold">₹{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Products;
