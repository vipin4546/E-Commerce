import categories from "../../data/categories"
function CategoryScrollBar({selectedCategory,setSelectedCategory}){
  
   
    return(
        <section className=" mb-2 bg-white py-3 border-b border-gray-200">
            <div className="flex overflow-x-auto gap-6 hide-scrollbar" >
                {
                    categories.map((category)=>{
                        return(

                        <div key={category.id} onClick={() => setSelectedCategory(category.name)} className="whitespace-nowrap border px-4 py-2 rounded cursor-pointer hover:bg-gray-100">
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