import { useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react"


export default function SearchFood(){

    const {id}=useParams()

    const [food,setFood]=useState("")
    const [RestData,setRestData]=useState([]);


        useEffect(()=>{
    
            async function FatchData() {
                const proxyServer="https://cors-anywhere.herokuapp.com/";
                const swiggyAPI=`https://www.swiggy.com/mapi/menu/pl/search?lat=28.5900071&lng=77.2275248&restaurantId=${food}&query=${food}&submitAction=ENTER`;
                const response=await fetch(proxyServer+swiggyAPI)
                const Data=await response.json();
                const tempData=Data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterData=tempData.filter((items)=>'title' in items?.card?.card);
                console.log(filterData)
                setRestData(filterData);
            }
    
            FatchData();
        },[]);

    return(
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-xl" placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
        </div>
    )
}