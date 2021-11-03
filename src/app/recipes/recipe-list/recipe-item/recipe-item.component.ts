import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() itemClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onItemClick(word: string) {
    this.itemClicked.emit(word);
  }
}
