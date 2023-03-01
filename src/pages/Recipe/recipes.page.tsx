import axios from 'axios';
import {  useEffect, useState } from 'react';


export type Recipe = {
  recipeId:number;
  title:string;
  image:string;
}
 function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[] | null> ([]);
  const RECIPES_URL= "http://localhost:3500/api/recipe/";
 
  useEffect(()=>{
    const fetchGetAllRecipe = async () => {
      await axios.get(RECIPES_URL).then((res) =>
      setRecipes(res.data.data)
    ).catch((err)=> console.error(err))};
    fetchGetAllRecipe();
  }, []);

  
  return (
    <div>
    <section>
      <h1>Recipes</h1>
      {
        recipes && recipes.map((data) => 
          { return (
            <article key={data.recipeId}>
              {data.image && (<img src={data.image} alt="montrant une recette" />)}
              <title>{data.title}</title>
            </article>
          )}
        )
      }
    </section>
    </div>
  )
}
export default Recipes