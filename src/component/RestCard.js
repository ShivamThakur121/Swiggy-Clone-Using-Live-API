import { Link } from "react-router"

export default function RestCard({restInfo}){
    return(
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="w-[280px] rounded-xl overflow-hidden shadow-md bg-white transform transition duration-200 hover:scale-95">
            <div className="relative w-full h-[180px]">
                <img className="rounded-2xl w-full h-full object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
                <h2 className="absolute left-2 text-white font-bold bottom-2 text-2xl">{restInfo?.info?.aggregatedDiscountInfoV3?.header}</h2>
            </div>
            <div className="p-3">
            <div className="font-bold text-lg truncate">{restInfo?.info?.name}</div>
            <div className="ml-3 flex font-bold text-green-400">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 mr-1 text-green-500">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 
                        1.402 8.172L12 18.897l-7.336 3.867 
                        1.402-8.172L.132 9.21l8.2-1.192z"/>
                </svg>
            </div>
            {restInfo?.info?.avgRating + " . " + restInfo?.info?.sla?.slaString}
            </div>
            <div className="text-gray-600 text-sm mt-1 truncate">{restInfo?.info?.cuisines.join(" ")}</div>
            <div className="text-gray-500 text-sm mt-1">{restInfo.info?.areaName}</div>
            </div>
        </div>
        </Link>
    )
}