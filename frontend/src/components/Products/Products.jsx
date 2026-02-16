import product from "../../data/product.js"
function Products(){
    return(
        <section className="py-12 mt-10 mb-10 px-6">
            <div className="grid grid-cols-5 gap-8 ">
            {
                product.map((product)=>{
                    return(
                        <div key = {product.id} className="">
                            {product.name}
                            {product.price}
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}
export default Products;