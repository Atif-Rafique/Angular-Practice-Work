import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientList : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 7)
  ] as any;

  constructor() { }

  ngOnInit(): void {
  }

}
