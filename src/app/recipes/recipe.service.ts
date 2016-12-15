import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
import { Ingredient } from '../shared/ingredient'
@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Summer Salad', 'Very Tasty', 'http://images.media-allrecipes.com/images/59094.jpg', [
      new Ingredient('French Frieds', 2),
      new Ingredient('Beaf Fry', 4)
    ]),
    new Recipe('Schintel', 'Okaylish', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', [])

  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
