import axios from 'axios'
import {useEffect, useState} from 'react'

  interface Comments {

  }
 const ShowComments = (props: {cocktailId : number}) => {
    const [commentData, setCommentData] = useState<Comments>([]);

    useEffect(() => {
      const fetchCocktailComments =async () => {
       await axios.get('http://localhost:3500/api/comment/'+props.cocktailId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('connect')}`,
        }
      })
      .then((data)=> {setCommentData(data)})
      .catch((err)=> {console.error(err)})};
      fetchCocktailComments();
    }, [])
    
  return (
    <>
        {/*commentData && commentData.map((data) => {

        })*/}

    </>
  )
}
export default ShowComments