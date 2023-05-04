import { useEffect, useState } from 'react';
import Thumbnail from '../../../../components/thumbnails';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
const Thumbnails = () => {
  const [videos, setVideos]= useState([]);

  useEffect(()=> {
    axios.get('data/dummy/popularvideo.json').then((res)=> setVideos(res.data.items)).catch((err)=> console.error(err))
  },[])
  
  return (
    <>
      {videos.map((data) => {
        return <Thumbnail key={uuid()} props={data} />;
      })}
    </>
  );
};

export default Thumbnails;
