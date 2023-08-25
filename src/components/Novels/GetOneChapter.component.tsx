import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {ChapterAttributes} from '../Interface'
export default function GetOneChapter(props:any) {
    const [chapterData, setChapterData] = useState<ChapterAttributes>()

    useEffect(() => {
      const fetchGetOneChapter =async () => {
        await axios.get("http://localhost:3500/api/novel/"+ props.novel +"/chapter/" + props.chapter)
            .then((res)=> {
                const responceData = res.data;
                setChapterData(responceData.chapter);
            }).catch((err)=> {
                console.error(err);
            })
      }
      fetchGetOneChapter();
    }, [props])
    
  return (
    <>
        {chapterData && 
            <h1> {chapterData.title}</h1>
        }
    </>
  )
}
