const VideoTitle = ({title, overview}) =>{
    return(
        <div className="bg-blue-300 p-10">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-3 text-lg w-1/3">{overview}</p>
            <div className="mt-5">
                <button className="mr-5 px-10 py-3 bg-white text-black font-bold rounded"><i class="fa-solid fa-play"></i>Play</button>
                <button className="mr-5 px-10 py-3 bg-white text-black font-bold rounded">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;