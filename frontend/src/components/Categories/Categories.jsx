import categories from "../../data/categories";

function Categories(){
    return(
        
        <section>
            <div className= "grid grid-cols-3 gap-6"> 
            {
                categories.map((category)=>{
                    return(
                        <div key={category.id}>{category.name}</div>
                    )
                })
            }
            </div>

        </section>
    )
}

export default Categories;
