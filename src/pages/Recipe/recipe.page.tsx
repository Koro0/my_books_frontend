import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Recipes, RecipeRouteParams, IngredientItem, MethodStep } from '../../components/Interface';

export default function ShowOneRecipe() {
  const {recipeID} = useParams<RecipeRouteParams>();
  const [recipeData, setRecipeData]=useState<Recipes>();
  const [ingredientData, setIngredientData]=useState<IngredientItem[]>([]);
  const [methodData, setMethodData]=useState<MethodStep[]>();

  useEffect(() => {
    const fetchRecipe = async () => {
      await axios.get("http://localhost:3500/api/recipe/"+ recipeID, 
      ).then(({data}) => {
        setRecipeData(data.recipe);
        setIngredientData(data.ingredients);
        setMethodData(data.methods);
      }).catch(() => {
        console.error();
      });
    }
    fetchRecipe();
  }, [recipeID, recipeData])
  console.log(recipeID);

  return (
    <>
      {recipeData && 
          <section>
            <h2>{recipeData.title}</h2>
            <img src={recipeData.image} alt="" />
            <article>
              <p>
                {recipeData.description}
              </p>
            </article>
            <article>
              <p>{recipeData.portion}</p>
            </article>
            <article>
              <h3>Liste d'ingredient : </h3>
              <ul>
              {ingredientData.map((item)=> {
              if(item.cocktailId === recipeData.recipeId) {
                return (
                    <li key={item.ingredientId}>
                      <p>  {item.quantity},  {item.name} </p>
                    </li>
                )
              }
              return null;
            })}
              </ul>
            </article>
            <article>
              <h3>Les Etapes : </h3>
              {methodData?.map((step) => {
                if(step.cocktailId === recipeData.recipeId) {
                  return (
                      <li key={step.recipeId}>
                        <h6> Method {step.stepNumber} : </h6>
                        <p> {step.description} </p>
                      </li>
                  )
                }
                return null;
              })}
            </article>
          </section>
      }
    </>
  )
}
