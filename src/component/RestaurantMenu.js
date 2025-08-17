import { useEffect, useState } from "react";
import { useParams } from "react-router"
import MenuCard from "./MenuCard";
import { Link } from "react-router";

export default function RestaurantMenu(){

    let {id}=useParams();
    const [selected,setSelected]=useState(null);
    const [RestData,setRestData]=useState([]);

    useEffect(()=>{

        async function FatchData() {
            const proxyServer="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6327&lng=77.2198&restaurantId=${id}`;
            const response=await fetch(proxyServer+swiggyAPI)
            const Data=await response.json();
            const tempData=Data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData=tempData.filter((items)=>'title' in items?.card?.card);
            setRestData(filterData);
        }

        FatchData();
    },[]);

    console.log(RestData);

    return(
        <div>
            <div className="w-[80%] mx-auto mt-20 mb-20">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center py-4 bg-gray-200 text-2xl">Search for Dishes</p>
                </Link>
            </div>
            <div className="w-[80%] m-auto mt-20 mb-20">
            <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==='veg'? "bg-green-600":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==='nonveg'?"bg-red-600":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Nonveg</button>
            </div>

        
        <div className="w-[80%] mx-auto">
            {
                RestData.map((menuItem)=><MenuCard key={menuItem?.card?.card?.title} menuItem={menuItem?.card?.card} foodselected={selected}></MenuCard>)
            }
        </div>
        </div>
    )
}