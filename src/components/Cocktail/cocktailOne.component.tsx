import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Drink, IngredientItem, MethodStep, CocktailRouteParams } from './cocktailInterfaces';


export default function CocktailOne() {
  const {cocktailId} = useParams<CocktailRouteParams>();
  const [cocktailData, setCocktailData]=useState<Drink>();
  const [ingredientData, setIngredientData]=useState<IngredientItem[]>();
  const [methodData, setMethodData]=useState<MethodStep[]>();

    useEffect(()=> {
        const fetchCocktail = async () => {
            await axios.get(`http://localhost:3500/api/recipe/cocktail/`+ cocktailId
             ).then(({data}) => {
                setCocktailData(data.cocktail);
                setIngredientData(data.ingredients);
                setMethodData(data.methods);
            }).catch(() => {
                console.error();
            });
        };
        fetchCocktail();
    }, [cocktailId]);
    console.log(cocktailData, ingredientData, methodData);

  return (
    <div >
        { cocktailData &&
            <article  className='cocktail'>
              <div  className='cocktail__header'>
                <div>
                  {/* <Card.Img  className='cocktail__img' src={data.image} alt={data.title} /> */}
                </div>
                <div>
                  <h2>{cocktailData.title}</h2>
                  <h3> Difficulté : {cocktailData.difficulty}</h3>
                  <p> Description : {cocktailData.description}</p>
                  <p> Time : {cocktailData.time}</p>
                  <p> Portion : {cocktailData.portion}</p>
                </div>
              </div>
              <div className='cocktail__body'>
                <div className='cocktail__body_ingredients'>
                    <h3> Liste d'ingredients : </h3>
                    <ul>
                    {ingredientData?.map((item) => {
                        if(item.cocktailId === cocktailData.cocktailId) {
                          return (
                              <li key={item.ingredientId}>
                                <p>  {item.quantity},  {item.name} </p>
                              </li>
                          )
                        }
                        return null;
                      })}
                            </ul>
                  </div>
                  <div className='cocktail__body_methods'>
                    <h3> Etapes : </h3>
                      {methodData?.map((step) => {
                        if(step.cocktailId === cocktailData.cocktailId) {
                          return (
                            <div key={step.methodId}>
                              <p> Method {step.stepNumber} : </p>
                              <p> {step.description} </p>
                            </div>
                          )
                        }
                        return null;
                      })}
                  </div>
                </div>
            </article>
            
        }
    </div>
  )
}