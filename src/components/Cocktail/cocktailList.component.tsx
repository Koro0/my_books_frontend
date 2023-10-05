import { useEffect, useState } from 'react';
import axios from 'axios';
import { Drinks } from '../Interface';
import ShowCards from '../ShowCard/ShowCards.component';

export default function CocktailList() {
  const [cocktailData, setCocktailData] = useState<Drinks[]>();

  useEffect(() => {
    const fetchCocktail = async () => {
      await axios
        .get('http://localhost:3500/api/cocktail')
        .then(({ data }) => {
          setCocktailData(data.cocktails);
        })
        .catch(() => {
          console.error();
        });
    };
    fetchCocktail();
  }, []);

  return (
    <div className="cocktails">
      {cocktailData &&
        cocktailData.map((data) => {
          return (
            <ShowCards
              itemId={data.cocktailId}
              itemLink={`/Cocktail/${data.cocktailId}`}
              itemImg={data.image}
              itemTitle={data.title}
              itemClassName={'cocktails_items'}
            />
          );
        })}
    </div>
  );
}
