import React, {  useEffect, useState } from 'react';
import CocktailList from '../../components/Cocktail/cocktailList.component';
import CocktailOne from '../../components/Cocktail/cocktailOne.component';

export default function cocktails() {
    const [getOneCocktail, setGetOneCocktail] = useState!<boolean>(false);

    useEffect!(()=>{
        const url =new URL(window.location.href);
        const cocktail_id = url.searchParams.get("id");
        const verifLocation = () => {
            if(cocktail_id === null ) {
                setGetOneCocktail(false);
            } else {
                setGetOneCocktail(true);
            }
        }
        console.log(getOneCocktail, cocktail_id )
        verifLocation()
    }, [])
  return (
    <div>
        <h1>récent cocktail</h1>
        <div>
            {!getOneCocktail ? <CocktailList /> : <CocktailOne />}
        
        </div>
    </div>
  )
}
