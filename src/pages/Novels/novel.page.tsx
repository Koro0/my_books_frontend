import React, { useEffect, useState } from 'react';
import { Novel, NovelRouteParams } from '../../components/Interface';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function ShowNovel() {
    const [novel, setNovel] = useState<Novel>();
    const {novelId} = useParams<NovelRouteParams>();

    useEffect(() => {
      const fetchNovel =async () => {
       await axios.get('http://localhost:3500/api/novel/'+ novelId)
      .then((res)=> {
        const response = res.data;
        if(response) {
          setNovel(response.data)
        }
      })
      .catch((err)=> {console.error(err)})
      };
      fetchNovel();
    }, [novelId])
    
  return (
    
    <div>
      {novel && 
      <div>
        <img src={novel.image} alt={novel.title} />
        <h1>{novel.title}</h1>
        </div>
      }
    </div>
  )
}