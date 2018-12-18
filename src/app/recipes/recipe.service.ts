import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanges = new Subject<Recipe[]>();

  private recipes:  Recipe[] = [
    new Recipe("Chocolate Chip Cookies",
    "Chewy and crunchy Chocolate Chip Cookies!",
    "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg",
    [
      new Ingredient('Chocolate',5,'Pounds'),
      new Ingredient('Flour',500,'grams'),
      new Ingredient('Sugar',2,'Cups'),
    ]),
    new Recipe("Granola & Oats Cookies",
    "Ew, healthy cookies...",
    "https://beamingbaker.com/wp-content/uploads/2017/02/IGT-Peanut-Butter-Coconut-Oatmeal-Cookies-Vegan-Gluten-Free-Dairy-Free-Whole-Grain-1.5.jpg",
    [
      new Ingredient('Oats',5,'Pounds'),
      new Ingredient('Oat-Flour',500,'grams'),
      new Ingredient('Splenda',2,'Cups'),
    ]),
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipesChanges.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanges.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanges.next(this.recipes.slice());
  }
}
