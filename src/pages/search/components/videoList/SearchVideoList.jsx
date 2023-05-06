import { Link } from 'react-router-dom';

const SearchVideoList = ({ props }) => {
    console.log(props)
    return (
        <>
            <li className="list-none ">
                <Link to={`/watch/${props.id.videoId}`}>
                    <div className="rounded-xl  mt-4 flex">
                        <div className="w-360 h-200 mr-6">
                            <img
                                src={props.snippet.thumbnails.medium.url}
                                alt={props.snippet.title}
                                className="w-full h-full rounded-2xl"
                            />
                        </div>
                        <div className="w-full-360 text-xs overflow-hidden text-ellipsis text-hi whitespace-nowrap">
                            <div className="font-bold text-lg ">{props.snippet.description}</div>
                            <div className="text-zinc-400">
                                <span className="after:content-['•'] after:m-0 after:text-xs">조회수</span>
                                <span>생성기간</span>
                            </div>
                            <div className="text-zinc-600 text-sm">{props.snippet.channelTitle}</div>
                            <div className="overflow-hidden text-ellipsis text-hi whitespace-nowrap">
                                {props.snippet.description}
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default SearchVideoList;
