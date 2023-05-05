import { useNavigate } from "react-router-dom";

const SideLinkVideo = ({props}) => {
  const navigate = useNavigate()
    return(
    <>

        <li >
          <div
            onClick={() => {
              navigate(`/watch/${props.id.videoId}`);
              window.scrollTo(0, 0);
            }}
            className="mb-2 flex cursor-pointer"
            >
            <img
              src={props.snippet.thumbnails.default.url}
              alt={props.snippet.title}
              className="mr-2"
              />
            <div className="line-clamp-2 text-ellipsis ">
              <div className="line-clamp-2 font-bold">{props.snippet.title}</div>
              <div>{props.snippet.channelTitle}</div>
            </div>
          </div>
           </li>
    </>
  )
}

export default SideLinkVideo