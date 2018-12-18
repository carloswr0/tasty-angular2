import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

import 'rxjs/add/operator/map'
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private authServer: AuthService, private recipeService: RecipeService) {}

  storeRecipes() {
    const token = this.authServer.getToken();

    return this.http.put('https://tasty-cw.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authServer.getToken();

    return this.http.get('https://tasty-cw.firebaseio.com/recipes.json?auth='+token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
