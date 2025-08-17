import { GroceryData } from "../Utils/GroceryData"
import GroceryCard from "./GroceryCard"

export default function GroceryOption(){
    return (
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="font-bold text-2xl">Shop Groceries on instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto gap-4 mt-7">
                    {
                        GroceryData.map((groceryData)=><GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)
                    }
            </div>
        </div>
    )
}