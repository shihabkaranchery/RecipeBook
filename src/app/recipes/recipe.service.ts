import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Summer Salad', 'Very Tasty', 'http://images.media-allrecipes.com/images/59094.jpg', []),
    new Recipe('Schintel', 'Okaylish', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', [])

  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
