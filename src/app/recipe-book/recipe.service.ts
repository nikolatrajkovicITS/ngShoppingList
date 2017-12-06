import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe/recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg'),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();    // slice will return new array which is copy of "recipes" arrray
    }
}