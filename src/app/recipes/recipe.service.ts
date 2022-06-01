import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";


export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Recipe Teste 1', 'This is a dummy Recipe', 'https://www.receitasdepesos.com.br/wp-content/uploads/2020/11/PUDIM-DE-MARACUJ%C3%81-QUE-N%C3%83O-VAI-AO-FORNO-984x743-1.jpeg'),
        new Recipe('Receita da Vovó', 'Bolo com cobertura.', 'https://o.imgac.net/receita/bolo-de-chocolate-do-tempo-da-vov-33581.jpg')
    ];

    getRecipes() {
        return this.recipes.slice(); //retorna uma copia do array.
    }
}

//place to manage recipes.