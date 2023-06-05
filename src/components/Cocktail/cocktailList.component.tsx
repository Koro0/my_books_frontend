import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Drinks } from '../Interface';

export default function CocktailList() {
    const [cocktailData, setCocktailData]=useState<Drinks[]>();
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchCocktail = async () => {
            await axios.get('http://localhost:3500/api/cocktail'
             ).then(({data}) => {
                setCocktailData(data.cocktails);
            }).catch(() => {
                console.error();
            });
        }
        fetchCocktail()
    }, [])
   
  return (
    <div  className='cocktails'>
        {cocktailData && cocktailData.map((data)=> {
            return (
            <Card style={{ width: '18rem' }} className='cocktails__card card__box' key={data.cocktailId}>
                {/*data.image?  <Card.Img  className='cocktail__img' src={data.image} alt={data.title} /> : null */}
                <Card.Body>
                <Card.Title className='cocktails__title'>{data.title}</Card.Title>
                <Card.Text> Difficultés : {data.difficulty}</Card.Text>
                <Card.Text> Description : {data.description}</Card.Text>
                <Card.Text> Temps : {data.time}</Card.Text>
                <Card.Text> Portion(s) : {data.portion}</Card.Text>
                </Card.Body>
                <Button onClick={()=> navigate(`/Cocktail/${data.cocktailId}`)} className='cocktails__btn'>Consulter</Button>
            </Card>
            )
        })}
    </div>
  )
}
