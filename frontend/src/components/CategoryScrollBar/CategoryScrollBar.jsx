import categories from "../../data/categories"
function CategoryScrollBar(){
    return(
        <section>
            <div className="flex overflow-x-auto gap-6">
                {
                    categories.map((category)=>{
                        <div key={category.id}>
                            {category.name}
                        </div>
                    })
                }
            </div>

        </section>


    )
}
export default CategoryScrollBar;