
export default function DineCard({dineData}){
    return(
        <div className="w-82 h-95 max-w-sm flex-none">
            <div className="relative">
                <a target="_blank" href={dineData?.cta.link}>
                    <img className="w-81 h-48 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ dineData?.info?.mediaFiles[0]?.url}></img>
                    <p className="absolute bottom-3 left-3 text-white font-bold z-15">{dineData?.info.name}</p>
                    <p className="absolute bottom-3 right-3 text-white font-bold z-15">{dineData?.info?.rating?.value}</p>
                    <div className="absolute bg-gradient-to-t from-black z-0 rounded-b-xl h-10 bottom-0 left-0 right-0"></div>
                </a>
            </div>
        </div>
    )
}