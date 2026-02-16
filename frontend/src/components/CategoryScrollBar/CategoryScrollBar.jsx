import categories from "../../data/categories"
function CategoryScrollBar(){
    return(
        <section className=" mb-2 bg-white py-3">
            <div className="flex overflow-x-auto gap-6 ">
                {
                    categories.map((category)=>{
                        return(

                        <div key={category.id} className="whitespace-nowrap border px-4 py-2 rounded-full cursor-pointer">
                            {category.name}
                        </div>
                        )
                    })
                }
            </div>

        </section>


    )
}
export default CategoryScrollBar;