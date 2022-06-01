import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

import { Recipe } from "./recipe.model";


export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Recipe Teste 1',
            'This is a dummy Recipe',
            'https://www.receitasdepesos.com.br/wp-content/uploads/2020/11/PUDIM-DE-MARACUJ%C3%81-QUE-N%C3%83O-VAI-AO-FORNO-984x743-1.jpeg',
            [new Ingredient('Flour', 3),
            new Ingredient('Eggs', 3),
            new Ingredient('Sugar', 1),
            new Ingredient('Milk', 2)]
        ),

        new Recipe(
            'Receita da Vovó',
            'Bolo com cobertura.',
            'https://o.imgac.net/receita/bolo-de-chocolate-do-tempo-da-vov-33581.jpg',
            [new Ingredient('Chocolate', 2),
            new Ingredient('Eggs', 12),
            new Ingredient('Milk', 1)]
        )
    ];

    getRecipes() {
        return this.recipes.slice(); //retorna uma copia do array.
    }
}

//place to manage recipes.