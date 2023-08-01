import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Novel} from '../Interface'

export default function ShowNovels() {
  const [novels, setNovels] =useState<Novel[]>();

  useEffect(() => {
    const fetchNovels =async () => {
     await axios.get('http://localhost:3500/api/novel/')
    .then((res)=> {
      const response = res.data;
      console.log(response.data)
      if(response) {
        setNovels(response.data)
      }
    })
    .catch((err)=> {console.error(err)})};
    fetchNovels();
  }, [])

  return (
    <>
      <ul className='novelList'>
        {novels && novels.map((data) => {
          return (
            <li className='novelList_item' key={data.novelId}>
              <a href={`/$(data.novelId)`}> 
                <img src={data.image} alt="image_novel" />
                <h2>{data.title}</h2>
              </a>
            </li>
          )
        })}
        {!novels && 
          <h2>Oups, aucun novel retrouvé</h2>
          }
      </ul>
    </>
  )
}
