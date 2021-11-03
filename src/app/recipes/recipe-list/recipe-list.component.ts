import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe1',
      'This is simply a test1',
      'https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg'
    ),
    new Recipe(
      'A Test Recipe2',
      'This is simply a test2',
      'https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg'
    ),
    new Recipe(
      'A Test Recipe3',
      'This is simply a test3',
      'https://d3ur40406gizl1.cloudfront.net/web_site/images/v2/plates/4.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  recipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
