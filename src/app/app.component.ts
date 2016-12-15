import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers: [RecipeService, ShoppingListService]
})

export class AppComponent {
  
}
 