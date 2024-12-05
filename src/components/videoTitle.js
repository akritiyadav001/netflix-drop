const VideoTitle = ({title, overview}) =>{
    return(
        <div className="w-screen aspect-video p-10 pt-20 absolute bg-gradient-to-r from-black text-white">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-3 text-lg w-1/3">{overview}</p>
            <div className="mt-5">
                <button className="mr-5 px-10 py-3 bg-white text-black font-bold rounded hover:bg-opacity-70"><i class="fa-solid fa-play"></i>Play</button>
                <button className="mr-5 px-10 py-3 bg-white text-black font-bold rounded"><i class="fa-solid fa-circle-info"></i>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;