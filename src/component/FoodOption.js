import imageGridCards from "../Utils/FoodData";
import FoodCard from "./FoodCard"

export default function FoodOption(){

    return(
        <>
            <div className="w-[80%] container mx-auto flex flex-wrap gap-4 mt-5">
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
                }
            </div>
        </>
    )
}