import { useSelector } from "react-redux"


export default function Checkout(){
    const items=useSelector(state=>state.cartslice.items);
    return(
        <div className="ml-2 mt-5 p-10 border border-black">
            {
                items.map(value=><div className="text-4xl" key={value.id}>{`Item: ${value.name},  Quantity: ${value.quantity},  Price: ${((value.price)/100)*(value.quantity)}`}</div>)
            }
        </div>
    )
}