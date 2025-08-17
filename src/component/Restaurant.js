import { useEffect, useState } from "react"
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
export default function Restaurant(){

    const [RestData,setRestData]=useState([]);

    useEffect(()=>{

        async function FatchData() {
            const proxyServer="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.5900071&lng=77.2275248&carousel=true&third_party_vendor=1";
            const response=await fetch(proxyServer+swiggyAPI)
            const Data=await response.json();
            setRestData(Data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        FatchData();
    },[]);

    //Shimmer Effect
    if(RestData.length==0){
        return <Shimmer></Shimmer>
    }
    
    // console.log("hsv",RestData);
    return(
        <div className="ml-5">
            <p className="font-bold text-3xl mb-6 mt-4 ml-2">Restaurants with online food delivery in Delhi</p>
            <div className="grid grid-cols-4 gap-6">
                {
                    RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
                }
            </div>
        </div>
    )
}

