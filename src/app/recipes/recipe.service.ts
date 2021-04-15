import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is simple a test recipe',
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg',
      [new Ingredient('Meat', 2), new Ingredient('French Fies', 20)]
    ),
    new Recipe(
      'The Second Recipe',
      'This is another recipe',
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg',
      [new Ingredient('Buns', 1), new Ingredient('Funcy toast', 3)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addRecipeIngredients(ingredients);
  }
}
