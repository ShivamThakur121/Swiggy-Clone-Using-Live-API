import { useState } from "react"
import {addItems,IncrementItems,DecrementItems} from "../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux"

export default function RestInfo({restData}){


    const dispatch =useDispatch();
    const items=useSelector(state=>state.cartslice.items);

    const element=items.find(item=>item.id===restData.id);
    const count=element? element.quantity:0;

    function handleAddItems(){
        dispatch(addItems(restData));
    }

    function handleIncrementItems(){
        dispatch(IncrementItems(restData));
    }

    function handleDecrementItems(){
        dispatch(DecrementItems(restData));
    }

    return(
        <>
        <div className="flex justify-between w-full mb-4">
            <div className="w-[70%] ">
                <p className="text-xl text-gray-700 font-semibold">{restData?.name}</p>
                <p>{"₹"+restData?.price/100}</p>
                <span className="text-green-400">{"✮ "+restData?.ratings?.aggregatedRating?.rating}</span>
                <span className="text-green-400">{" ("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>{restData?.description}</p>
            </div>
            <div className="relative w-[20%] h-42">
                <img className="w-60 h-36 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ restData?.imageId}></img>
                {
                    count===0?(<button className="absolute h-10 w-15 bottom-3 left-20 rounded-2xl text-green px-4 bg-white shadow-md border border-white" onClick={()=>handleAddItems()}>ADD</button>):(
                        <div className="absolute flex bottom-1 left-20 gap-2 text-3xl text-green-600 px-6 py-2 shadow-md border rounded-2xl bg-white">
                            <button onClick={()=>handleDecrementItems()}>-</button>
                            <span>{count}</span>
                            <button onClick={()=>handleIncrementItems()}>+</button>
                        </div>
                    )
                }
                
            </div>
        </div>
        <hr className="mb-4"></hr>
        </>
    )
}