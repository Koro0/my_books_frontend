
export interface Drink {
    cocktailId:string;
    title:string;
    description:string;
    portion:string;
    time:string;
    difficulty:string;
}

export interface Drinks {
    cocktailId:number;
    title:string;
    description:string;
    portion:string;
    time:string;
    difficulty:string;
}

export interface IngredientItem {
    ingredientId:number;
    name:string;
    quantity:string;
}

export interface MethodStep {
    methodId:number;
    stepNumber:number;
    description:string;
}

export type CocktailRouteParams = {
    cocktailId:string;
}

export interface CocktailProps {
    cocktail_id:string;
}