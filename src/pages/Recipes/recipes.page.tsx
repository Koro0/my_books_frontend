import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ShowDate from '../../components/utils/showDate.component';
import { Recipe } from '../../components/Interface';

 function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[] | null> ([]);
  const recipeURL= "http://localhost:3500/api/recipe/";

  const navigate= useNavigate();
  
 
  useEffect(()=>{
    const fetchGetAllRecipe = async () => {
      await axios.get(recipeURL).then((res) =>
      setRecipes(res.data.data)
    ).catch((err)=> console.error(err))};
    fetchGetAllRecipe();
  }, []);

  
  return ( 
    <>
    <section>
      <h1>Recipes</h1>
      <div className='recipes'>
      {
        recipes!=null && recipes.map((data) => 
          { return (
            <article className='recipes__list card__box' key={data.recipeId + data.title}>
              <Card style={{ width: '18rem' }}>
                {data.image && (<Card.Img  variant="top" src={data.image} alt="montrant une recette" />)}
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.content}
                  </Card.Text>
                  <Button onClick={()=> navigate(`/recipe/${data.recipeId}`)} variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer>
                  <Card.Subtitle>
                    Added by : {data.author}
                  </Card.Subtitle>
                  <ShowDate date={data.createdAt} />
                </Card.Footer>
               </Card>
            </article>
          )}
        )
      }
      </div>
    </section>
    </>
  )
}
export default Recipes