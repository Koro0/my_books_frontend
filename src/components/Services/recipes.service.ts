import axios from "axios";

export class RecipesService {
    static API_RECIPES="http://localhost:3500/api/recipe/";
    static API_NOVEL="http://localhost:3500/api/novel/";
    static API_USER="http://localhost:3500/api/user/";

    static async getAllRecipes() {
        return await axios.get(this.API_RECIPES);
    }
}

