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
      const fetchVerifiedNextChapter = async() => {
        const chapterNum = parseInt(props.chapter) +1;
        await axios.get("http://localhost:3500/api/novel/"+ props.novel +"/chapter/" + chapterNum)
          .then(()=> {
            props.setChapterBool(true)
          }).catch((err)=> {
            console.error(err);
            props.setChapterBool(false)
          })
      }
      fetchGetOneChapter();
      fetchVerifiedNextChapter();
    }, [props])
    
  return (
    <>
        {chapterData && 
            <h1> {chapterData.title}</h1>
        }
    </>
  )
}
