import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {ChapterAttributes} from '../Interface';
import ShowDate from '../utils/showDate.component';

export default function GetAllChapter() {
  const {novelId, chapterId} = useParams();
  const [allChapters, setAllChapters] = useState<ChapterAttributes[]>([])

  useEffect(() => {
    const fetchGetAllChapter=async() => {
      await axios.get("http://localhost:3500/api/novel/" + novelId + "/chapter")
        .then((res)=> {
          const responceData = res.data;
          setAllChapters(responceData.data);
        }).catch((err)=> {
          console.error(err)
        })
    }
    fetchGetAllChapter()
  }, [novelId,chapterId])
  
  return (
    <>
      <h2>Recent Chapter :</h2>
      <ul>
        <li>
          <p></p>
        </li>
        {allChapters && allChapters.map((chapter) => {
          const chapterLink = "/novels/" + chapter.novelId + "/"+chapter.chapterId;
          console.log(allChapters);
          return (
              <li key={chapter.chapterId}>
                <a href={chapterLink}>
                  <p>{chapter.chapterNumber}</p>
                  <p>{chapter.title}</p>
                  <ShowDate date={chapter.createdAt} />
                </a>
              </li>
          )
        })}
      </ul>
    </>
  )
}
