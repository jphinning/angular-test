import { Component } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  constructor(private cart: CartService) {}

  shippingCosts = this.cart.getShippingPrices();

  testingConsole() {
    this.cart.getShippingPrices().subscribe((list) => console.log(list));
  }
}
