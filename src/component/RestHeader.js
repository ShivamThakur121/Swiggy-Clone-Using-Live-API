import { useSelector } from "react-redux"
import { Link } from "react-router"

export default function RestHeader(){

    const counter=useSelector(state=>state.cartslice.count)

    return(
        <div className="sticky top-0 container mx-auto w-[80%] py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
            <div>
                <p className="text-orange-600 font-bold">Swiggy</p>
            </div>
            <div>
                <Link to="/Checkout">
                <p>Card: {`(${counter})`}</p>
                </Link>
            </div>
        </div>
    )
}