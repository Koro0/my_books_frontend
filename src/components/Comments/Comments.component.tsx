import axios from 'axios'
import {useEffect, useState} from 'react'

  interface Comments {
    commentId:number,
    commentText:string,
    createdAt:Date,
    userId:number,
  }
  interface ShowCommentsProps {
    categories:string,
    ID : number
  }
 const ShowComments = (props: ShowCommentsProps) => {
    const [commentData, setCommentData] = useState<Comments[]>();

    useEffect(() => {
      const fetchCocktailComments =async () => {
       await axios.get('http://localhost:3500/api/comment/'+props.categories+"/"+props.ID, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('connect')}`,
        }
      })
      .then((data)=> {setCommentData(data.data)})
      .catch((err)=> {console.error(err)})};
      fetchCocktailComments();
    }, [props])
    
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