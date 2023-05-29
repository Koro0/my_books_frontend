import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Recipes } from '../../components/Interface';

export default function recipe() {
  const url = window.location.href;
  const Id = url.split('/').pop();
  const [recipeData, setRecipeData]=useState!<Recipes[]>()
  useEffect(() => {
    const fetchRecipe = async () => {
      await axios.get("http://localhost:3500/api/recipe/"+ Id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('connect')}`,
        }
      }).then(({data}) => {
        setRecipeData(data.data);
    }).catch(() => {
        console.error();
    });
    }
    fetchRecipe();
  }, [Id])
  

  return (
    <>
      {recipeData && recipeData.map((datas)=> {
        return(
          <section key={datas.recipeId}>
            <h2>{datas.title}</h2>
            <img src={datas.image} alt="" />
            <article>
              <p>
                {datas.description}
              </p>
              </article>
            <article>
              <p>{datas.portion}</p>
            </article>
          </section>
        )
      })}
    </>
  )
}
