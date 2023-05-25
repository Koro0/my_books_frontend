import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ShowComments from '../Comments/Comments.component';

import { Drink, IngredientItem, MethodStep, CocktailRouteParams } from '../Interface';


export default function CocktailOne() {
  const {cocktailId} = useParams<CocktailRouteParams>();
  const [cocktailData, setCocktailData]=useState<Drink>();
  const [ingredientData, setIngredientData]=useState<IngredientItem[]>();
  const [methodData, setMethodData]=useState<MethodStep[]>();

    useEffect(()=> {
        const fetchCocktail = async () => {
            await axios.get(`http://localhost:3500/api/cocktail/`+ cocktailId
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
    < >
        { cocktailData &&
            <section  className='cocktail'>
              <div  className='cocktail__header'>
                <>
                  {/* <Card.Img  className='cocktail__img' src={data.image} alt={data.title} /> */}
                </>
                <article>
                  <h2>{cocktailData.title}</h2>
                  <h3> Difficulté : {cocktailData.difficulty}</h3>
                  <p> Description : {cocktailData.description}</p>
                  <p> Time : {cocktailData.time}</p>
                  <p> Portion : {cocktailData.portion}</p>
                </article>
              </div>
              <div className='cocktail__body'>
                <article className='cocktail__body_ingredients'>
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
                  </article>
                  <article className='cocktail__body_methods'>
                    <h3> Etapes : </h3>
                      {methodData?.map((step) => {
                        if(step.cocktailId === cocktailData.cocktailId) {
                          return (
                            <div key={step.methodId}>
                              <h6> Method {step.stepNumber} : </h6>
                              <p> {step.description} </p>
                            </div>
                          )
                        }
                        return null;
                      })}
                  </article>
                </div>
                <div>
                  <article>
                    <h3>Commentaire</h3>
                      <ShowComments ID={cocktailData.cocktailId} categories={"Cocktail"}/>
                  </article>
                </div>
            </section>
        }
    </>
  )
}