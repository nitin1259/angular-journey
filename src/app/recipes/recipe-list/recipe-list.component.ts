import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is simple a test recipe',
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg'
    ),
    new Recipe(
      'Second Recipe',
      'This is another recipe',
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
