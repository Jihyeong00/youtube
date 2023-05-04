import { Navigate } from "react-router-dom";

const SideLinkVideo = (video) => {
    return(
    <>{
      video.map((video)=>(

        <li >
    <div
      onClick={() => {
        Navigate(`/watch/${video.id.videoId}`);
        window.scrollTo(0, 0);
      }}
      className="mb-2 flex cursor-pointer"
      >
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
        className="mr-2"
        />
      <div className="line-clamp-2 text-ellipsis ">
        <div className="line-clamp-2 font-bold">{video.snippet.title}</div>
        <div>{video.snippet.channelTitle}</div>
      </div>
    </div>
  </li>
        ))
      }
        </>
  )
}

export default SideLinkVideo