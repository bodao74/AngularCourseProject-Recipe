import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe Teste 1', 'This is a dummy Recipe', 'https://www.receitasdepesos.com.br/wp-content/uploads/2020/11/PUDIM-DE-MARACUJ%C3%81-QUE-N%C3%83O-VAI-AO-FORNO-984x743-1.jpeg'),
    new Recipe('Receita da Vovó', 'Bolo com cobertura.', 'https://o.imgac.net/receita/bolo-de-chocolate-do-tempo-da-vov-33581.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
