function Benefits(){
    const benefits =[{id:1,title:"free Delivery"},{id:2,title:"Easy Returns"},{id:4,title:"Secure Payment"},{id:4,title:"24/7 Support"}]
    return(
        <section className="grid grid-cols-4 gap-6 py-12 max-w-7xl mx-auto px-6">
            {
                benefits.map((benefit)=>{
                    return(
                        <div className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md"key = {benefit.id}>{benefit.title}</div>
                    )
                })
            }
        </section>
    )
}
export default Benefits;