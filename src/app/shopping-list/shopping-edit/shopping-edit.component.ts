import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode: Boolean = false;
  editItemIndex: number;
  editItem: Ingredient;

  @ViewChild('f', { static: false }) slForm: NgForm; // sintaxe: ViewChild('aqui_o_identificador_do_elemento_no arquivo_htmml - depois o nome da variavel no codigo do arquivo typescript e seu tipo')

  constructor(private slService: ShoppingListService) { }


  ngOnInit(): void {
    this.subscription = this.slService.startEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.slService.getIngredient(this.editItemIndex);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.onClearForm();
  }

  onDeleteIngredient() {
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClearForm();
  }

  onClearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
