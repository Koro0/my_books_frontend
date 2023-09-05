import React, {useState, useEffect} from 'react'
import {Paragraphs} from '../Interface'
import axios from 'axios';

export default function GetAllParagraphs(props:any) {
    const [allParagraphs, setAllParagraphs] = useState<Paragraphs[]>([]);

    useEffect(()=> {
        const fetchGetAllParagraphs = async() => {
            await axios.get("http://localhost:3500/api/novel/" + props.novel + "/"+ props.chapter + "/content")
                .then((res)=> {
                    const responseData = res.data
                    setAllParagraphs(responseData.data);
                })
                .catch((err)=> {
                    console.error(err);
                })
        };
        fetchGetAllParagraphs();
    }, [props.chapter, props.novel])
  return (
    <>
        {allParagraphs && allParagraphs.map((data)=> {
            return(
                <p className='content_paragraphs' key={data.paragraphId}>{data.paragraph}</p>
            )}
        )}
    </>
  )
}
