
export interface Drink {
    cocktailId:number;
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
    cocktailId:number;
    name:string;
    quantity:string;
}

export interface MethodStep {
    methodId:number;
    cocktailId:number;
    stepNumber:number;
    description:string;
}

export type CocktailRouteParams = {
    cocktailId:string;
}

export interface CocktailProps {
    cocktail_id:string;
}

export interface Comments {
    commentId:number,
    commentText:string,
    createdAt:Date,
    userId:number,
}

export interface ShowCommentsProps {
categories:string,
ID : number
}

export interface Recipes {
    recipeId:number,
    title:string,
    description:string,
    image:string,
    portion:string,
    time:string,
    addBy:number,
    createdAt:Date
}