import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

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

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice(); //retorna uma copia do array.
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRedipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}

//place to manage recipes.