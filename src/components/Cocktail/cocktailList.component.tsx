import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Drinks } from './cocktailInterfaces';

export default function CocktailList() {
    const [cocktailData, setCocktailData]=useState<Drinks[]>();
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchCocktail = async () => {
            await axios.get('http://localhost:3500/api/recipe/cocktail'
             ).then(({data}) => {
                setCocktailData(data.cocktails);
            }).catch(() => {
                console.error();
            });
        }
        fetchCocktail()
    }, [])
   
  return (
    <div  className='cocktail'>
        {cocktailData && cocktailData.map((data)=> {
            return (
            <Card style={{ width: '18rem' }} className='cocktail__card' key={data.cocktailId}>
                {/* <Card.Img  className='cocktail__img' src={data.image} alt={data.title} /> */}
                <Card.Body>
                <Card.Title className='cocktail__title'>{data.title}</Card.Title>
                <Card.Text> Difficulty : {data.difficulty}</Card.Text>
                <Card.Text> Description : {data.description}</Card.Text>
                <Card.Text> Time : {data.time}</Card.Text>
                <Card.Text> Portion : {data.portion}</Card.Text>
                </Card.Body>
                <Button onClick={()=> navigate(`/Cocktail/${data.cocktailId}`)} variant="primary">Go recipe !</Button>
            </Card>
            )
        })}
    </div>
  )
}
