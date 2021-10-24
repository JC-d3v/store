import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.services';

@Component({
  selector: 'app-cart',
  template: `
    <ng-container
      *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart"
    >
      <mat-icon>add_shopping_cart</mat-icon>
      {{ dataCart.total | currency }}
      ({{ dataCart.quantity }})
    </ng-container>
  `,
})
export class CartComponent {
  quantity$ = this.shoppingCardSvc.quantityAction$;
  total$ = this.shoppingCardSvc.totalAction$;
  cart$ = this.shoppingCardSvc.cartAction$;

  constructor(private shoppingCardSvc: ShoppingCartService) {}
}