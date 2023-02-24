import axios from 'axios';
import React, { useEffect, useState } from 'react';

import dotenv from 'dotenv';
dotenv.config();

interface Recipe {
  recipeID:number;
  title:string;
  image:string;
}
export default function Index() {
  const [recipes, setRecipes] = useState<Recipe[]> ([]);
  useEffect(()=>{
    const fetchGetAllRecipe = async () => {
     const response = await axios.get(process.env.GET_RECIPES!);
     setRecipes(response.data);
    }
    fetchGetAllRecipe()
  }, []);
  return (
    <section>
      <h1>Recipes</h1>
      {recipes && recipes.map(data => (
        <article key={data.recipeID}>
          <img src={data.image} alt="montrant une recette" />
          <title>{data.title}</title>
        </article>
      ))}
    </section>
  )
}