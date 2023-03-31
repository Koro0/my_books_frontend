import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import Card from 'react-bootstrap/Card';

import { Drink, IngredientItem, MethodStep, CocktailRouteParams } from './cocktailInterfaces';


 const CocktailOne = () => {
  const {cocktailId} = useParams<CocktailRouteParams>();
  const [cocktailData, setCocktailData]=useState<Drink[]>();
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
    <div  className='cocktail'>
        {cocktailData && cocktailData.map((data)=> {
            return (
            <Card style={{ width: '18rem' }} className='cocktail__card' key={data.cocktailId}>
                {/* <Card.Img  className='cocktail__img' src={data.image} alt={data.title} /> */}
                <Card.Header>
                  <Card.Title className='cocktail__title'>{data.title}</Card.Title>
                  <Card.Text> Difficulty : {data.difficulty}</Card.Text>
                  <Card.Text> Difficulty : {data.description}</Card.Text>
                  <Card.Text> Difficulty : {data.time}</Card.Text>
                  <Card.Text> Difficulty : {data.portion}</Card.Text>
                </Card.Header>
                <Card.Body>
                  <Card.Title> Liste d'ingredients : </Card.Title>
                  {ingredientData?.map((item)=> {
                    return (
                      <div key={item.ingredientId}>
                      <Card.Text> <span> {item.quantity} : </span> {item.name} </Card.Text>
                      </div>
                    )
                  })}
                </Card.Body>
                <Card.Footer>
                  <Card.Title> Etapes : </Card.Title>
                    {methodData?.map((step) => {
                      return (
                        <div key={step.methodId}>
                          <Card.Subtitle> Method :  {step.stepNumber} </Card.Subtitle>
                          <Card.Text> {step.description} </Card.Text>
                        </div>
                      )
                    })}
                </Card.Footer>
            </Card>
            )
        })}
    </div>
  )
}

export default CocktailOne;