import RestInfo from "./RestInfo";
import { useState } from "react";

export default function MenuCard({menuItem, foodselected}){

    const [isOpen, setIsOpen]=useState(true);

    if("categories" in menuItem){
        return(
            <div>
                <p>{menuItem.title}</p>
                <div>
                    {
                        menuItem.categories?.map((items)=><MenuCard key={items?.title} menuItem={items}></MenuCard>)
                    }
                </div>
            </div>
        )
    }

    if(!isOpen){
        return(
            <div className="w-full">
                <div className="mt-3 flex justify-between w-full">
                <p className="font-bold text-3xl mb-4">{menuItem?.title}</p>
                <button className="text-4xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'⌃':'˅'}</button>
                </div>
                <div className="h-5 bg-gray-400 mt-2 mb-2"></div>
            </div>
        )
    }


    if(foodselected==='veg'){
        return(
            <div className="mt-3 w-full">
             <div className="mt-3 flex justify-between w-full">
            <p className="font-bold text-3xl mb-4">{menuItem?.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'⌃':'˅'}</button>
            </div>
            <div className="mt-5">
                {
                    menuItem?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

    if(foodselected==='nonveg'){
        return(
            <div className="mt-3 ">
                <div className="mt-3 flex justify-between w-full">
                <p className="font-bold text-3xl mb-4">{menuItem?.title}</p>
                <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'⌃':'˅'}</button>
                </div>
                <div className="mt-5">
                    {
                        menuItem?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info.id} restData={items?.card?.info}></RestInfo>)
                    }
                </div>
                <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </div>
        )
    }


    return(

        <div className="mt-3">
             <div className="mt-3 flex justify-between w-full">
            <p className="font-bold text-3xl mb-4">{menuItem?.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'⌃':'˅'}</button>
            </div>
            <div className="mt-5">
                {
                    menuItem?.itemCards?.map((items)=><RestInfo key={items?.card?.info.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
    )
}
