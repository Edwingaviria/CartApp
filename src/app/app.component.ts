import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cart-app';
  showCart = false;

  constructor( public cartService: CartService) { }


  toggleCart(): void {
    this.showCart = !this.showCart;
  }


}
