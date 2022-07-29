import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private igChangedSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();

    this.igChangedSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }); /* Toda vez que houver uma inclusão de um ingrediente, 
          o subscribe é notificado e atualiza o array usado para 
          mostrar os ingredientes, o que acaba refletido  na página html 
          (é feita uma nova cópai).*/
  }

  onEditItem(index: number) {
    this.slService.startEditing.next(index);
  }
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }
}
