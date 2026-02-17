import {Truck, RotateCcw, ShieldCheck, Headphones} from "lucide-react"
function Benefits(){
    const benefits =[{id:1,title:"free Delivery",icon:Truck},{id:2,title:"Easy Returns",icon:RotateCcw},{id:3,title:"Secure Payment",icon:ShieldCheck},{id:4,title:"24/7 Support",icon:Headphones}]
    return(
        <section className="grid grid-cols-4 gap-6 py-12 max-w-7xl mx-auto px-6">
            {
                benefits.map((benefit)=>{
                    const Icon = benefit.icon;
                    return(
                     
                        <div className="flex flex-col items-center border rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition" key = {benefit.id}> <Icon className="w-8 h-8 text-blue-600 mb-3" /> {benefit.title}</div>
                    )
                })
            }
        </section>
    )
}
export default Benefits;