import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from 'app/recipe-book/recipe/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

}
