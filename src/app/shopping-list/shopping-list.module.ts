import { NgModule } from "@angular/core";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShopingEditComponent } from "./shoping-edit/shoping-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShopingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ShoppingListModule {}
