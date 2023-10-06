import axios from 'axios';
import { useEffect, useState } from 'react';

import { Recipes } from '../../components/Interface';

import ShowCards from '../../components/ShowCard/ShowCards.component';

function AllRecipes() {
  const [recipes, setRecipes] = useState<Recipes[] | null>([]);
  const recipeURL = 'http://localhost:3500/api/recipe/';

  useEffect(() => {
    const fetchGetAllRecipe = async () => {
      await axios
        .get(recipeURL)
        .then((res) => setRecipes(res.data.data))
        .catch((err) => console.error(err));
    };
    fetchGetAllRecipe();
  }, []);

  return (
    <>
      <section>
        <h1>Recipes</h1>
        <div className="recipes">
          {recipes != null &&
            recipes.map((data) => {
              return (
                <ShowCards
                  itemId={data.recipeId}
                  itemLink={`/recipe/${data.recipeId}`}
                  itemImg={data.image}
                  itemTitle={data.title}
                  itemClassName={'novelList_item'}
                  itemDate={data.createdAt}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}
export default AllRecipes;
