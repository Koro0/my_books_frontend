import { useNavigate } from 'react-router-dom'

export default function NavChapter(props:any) {
    const navigate = useNavigate();
    const chapterNum:number=parseInt(props.chapter);
    const previewChapter =()=> {navigate('/novels/'+props.novel+'/'+(chapterNum-1));}
    const nextChapter = ()=>{navigate('/novels/'+props.novel+'/'+(chapterNum+1));}
    const returnIndex =()=> {navigate('/novels/'+props.novel);}
  return (
    <div className="NavChapter">
      {chapterNum===1?
        <button  className='NavChapter_item' onClick={()=>previewChapter()} disabled >Preview</button>
          :
        <button  className='NavChapter_item' onClick={()=>previewChapter()} >Preview</button>
      }
      <button className='NavChapter_item' onClick={()=>returnIndex()}>Index</button>
      {props.chapterBool === false?
        <button className='NavChapter_item'  onClick={()=>nextChapter()} disabled >Next</button>
        :
        <button className='NavChapter_item'  onClick={()=>nextChapter()}>Next</button>
      }
    </div>
  )
}
