import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

interface Drinks {
    id:string;
    title:string;
    image:string;
    ingredients:string;
    difficulty:string;
}
export default function CocktailList() {
    const [cocktailData, setCocktailData]=useState<Drinks[]>();
    const navigate = useNavigate();
    const config = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '27b55ce60fmsh7b60b336e57e5fdp1adba0jsnb4b2bdb12282',
          'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
        }
      };

    useEffect(()=> {
        const fetchCocktail = async () => {
            await axios.get('https://the-cocktail-db3.p.rapidapi.com/', config
             ).then(({data}:{data:Drinks[]}) => {
                setCocktailData(data);
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
            <Card style={{ width: '18rem' }} className='cocktail__card' key={data.id}>
                <Card.Img  className='cocktail__img' src={data.image} alt={data.title} />
                <Card.Body>
                <Card.Title className='cocktail__title'>{data.title}</Card.Title>
                <Card.Text> Difficulty : {data.difficulty}</Card.Text>
                </Card.Body>
                <Button onClick={()=> navigate(`/Cocktail/id=${data.id}`)} variant="primary">Go recipe !</Button>
            </Card>
            )
        })}
    </div>
  )
}
