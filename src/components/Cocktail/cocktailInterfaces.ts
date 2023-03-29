
export interface Drink {
    id:string;
    title:string;
    description:string;
    portion:string;
    time:string;
    difficulty:string;
    ingredientList:string[];
    methodList:string[];
}

export interface Drinks {
    id:string;
    title:string;
    description:string;
    portion:string;
    time:string;
    difficulty:string;
}

export interface Ingredient {
    ingredientId:number;
    name:string;
    quantity:string;
}

export interface Method {
    methodId:number;
    description:string;
    stepNumber:number;
}