import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export type Recipe = {
  recipeId:number;
  title:string;
  image:string | null;
  content:string | null;
}
 function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[] | null> ([]);
  const recipeURL= "http://localhost:3500/api/recipe/";

  const navigate= useNavigate();
  const handleClick = (id:number) => {
    navigate("/recipe/" + String(id));
  }
 
  useEffect(()=>{
    const fetchGetAllRecipe = async () => {
      await axios.get(recipeURL).then((res) =>
      setRecipes(res.data.data)
    ).catch((err)=> console.error(err))};
    fetchGetAllRecipe();
  }, []);

  
  return ( 
    <div>
    <section>
      <h1>Recipes</h1>
      <div className='recipes'>
      {
        recipes!=null && recipes.map((data) => 
          { return (
            <article className='recipes__list' key={data.recipeId + data.title}>
              <Card style={{ width: '18rem' }}>
                {data.image && (<Card.Img  variant="top" src={data.image} alt="montrant une recette" />)}
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.content}
                  </Card.Text>
                  <Button onClick={()=> handleClick(data.recipeId)} variant="primary">Go somewhere</Button>
                </Card.Body>
               </Card>
            </article>
          )}
        )
      }
      </div>
    </section>
    </div>
  )
}
export default Recipes