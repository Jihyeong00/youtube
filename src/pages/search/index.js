import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const params = useParams();
    const searchString = params.searchString;
    return (
        <>
            <div>{searchString}검색 결과 페이지입니다.</div>
        </>
    );
};

export default SearchPage;
