export interface Drink {
  cocktailId: number;
  title: string;
  description: string;
  portion: string;
  time: string;
  difficulty: string;
  image: string;
}

export interface Drinks {
  cocktailId: number;
  title: string;
  description: string;
  portion: string;
  time: string;
  difficulty: string;
  image: string;
}

export interface IngredientItem {
  ingredientId: number;
  cocktailId: number;
  recipeId: number;
  name: string;
  quantity: string;
}

export interface MethodStep {
  methodId: number;
  cocktailId: number;
  recipeId: number;
  stepNumber: number;
  description: string;
}

export type CocktailRouteParams = {
  cocktailId: string;
};

export type RecipeRouteParams = {
  recipeID: string;
};

export type NovelRouteParams = {
  novelId: string;
};

export interface CocktailProps {
  cocktail_id: string;
}

export interface Comment {
  commentId: number;
  commentText: string;
  userId: number;
  novelId: number;
  recipeId: number;
  cocktailId: number;
  createdAt: Date;
}

export interface ShowCommentsProps {
  categories: string;
  ID: number;
}

export interface createComment {
  commentText: string;
  userId: number;
}

export interface Recipes {
  recipeId: number;
  title: string;
  image: string;
  portion: string;
  time: string;
  createdAt: Date;
}

export type Recipe = {
  recipeId: number;
  title: string;
  description: string;
  image: string | null;
  content: string | null;
  author: number;
  createdAt: Date;
};

export interface Novel {
  novelId: number;
  image: string;
  title: string;
  type: string;
  author: string;
  description: string;
  likesCount: number;
  createdAt: Date;
}

export interface ChapterAttributes {
  chapterId: number;
  chapterNumber: number;
  title: string;
  novelId: number;
  createdAt: Date;
}

export interface Paragraphs {
  paragraphId: number;
  paragraph: string;
  chapterId: number;
}

export interface ShowCardsProps {
  itemId: number;
  itemTitle: string;
  itemLink: string;
  itemImg: string;
  itemClassName: string;
  recipePortion?: number;
  recipeTime?: string;
}
