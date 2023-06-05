import axios from 'axios'
import {useEffect, useState} from 'react'
import {Comment, ShowCommentsProps} from '../Interface'

 const ShowComments = (props: ShowCommentsProps) => {
    const [commentData, setCommentData] = useState<Comment[]>([]);

    useEffect(() => {
      const fetchCocktailComments =async () => {
       await axios.get('http://localhost:3500/api/comment/'+props.categories+"/"+props.ID)
      .then((res)=> {
        const data = res.data;
        if(data&&data.comments) {
          setCommentData(data.comments)
        }
      })
      .catch((err)=> {console.error(err)})};
      fetchCocktailComments();
    }, [props, commentData])

    
  return (
    <div>
        {commentData && commentData.map((datas) => {
          return (
            <article key={datas.commentId}>
              <h2>{datas.userId}</h2>
              <p>{datas.commentText}</p>
            </article>
          )
        })}
    </div>
  )
}
export default ShowComments