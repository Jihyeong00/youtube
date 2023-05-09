import { Link } from 'react-router-dom';

const SearchVideoList = ({ props }) => {
    const {thumbnails, title, description, channelTitle} = props.snippet
    return (
        <>
            <li className="list-none ">
                <Link to={`/watch/${props.id.videoId}`}>
                    <div className="rounded-xl  mt-4 flex">
                        <div className="w-360 h-200 mr-6">
                            <img
                                src={thumbnails.medium.url}
                                alt={title}
                                className="w-full h-full rounded-2xl"
                            />
                        </div>
                        <div className="w-full-360 text-xs overflow-hidden text-ellipsis text-hi whitespace-nowrap">
                            <div className="font-bold text-lg ">{description}</div>
                            <div className="text-zinc-600 text-sm">{channelTitle}</div>
                            <div className="overflow-hidden text-ellipsis text-hi whitespace-nowrap">
                                {description}
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default SearchVideoList;
