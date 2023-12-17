import axios from 'axios';
import { useEffect, useState } from 'react';
import { Comment, ShowCommentsProps } from '../Interface';
import CreateComment from '../Comments/CreateComment.component';

const ShowComments = (props: ShowCommentsProps) => {
  const [commentData, setCommentData] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchCocktailComments = async () => {
      await axios
        .get(
          'http://localhost:3500/api/comment/' +
            props.categories +
            '/' +
            props.ID
        )
        .then((res) => {
          const data = res.data;
          if (data && data.comments) {
            setCommentData(data.comments);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchCocktailComments();
  }, [props, commentData]);

  return (
    <>
      {commentData &&
        commentData.map((datas) => {
          return (
            <article className="showCommentWindow" key={datas.commentId}>
              <h2>{datas.userId}</h2>
              <p>{datas.commentText}</p>
            </article>
          );
        })}
      {commentData ? (
        <article className="showNoneComment">
          <h2>Aucun Commentaire</h2>
          <h3>Soyez le premier a commenter</h3>
        </article>
      ) : null}
      <CreateComment ID={props.ID} categories={props.categories} />
    </>
  );
};
export default ShowComments;
