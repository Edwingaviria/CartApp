import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cart-app';
  cartItems: any[] = [];
  showToggleCart = false;

  constructor(private router: Router, public cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  showProductList() {
    this.router.navigate(['/products']);
  }

  showCart() {
    this.router.navigate(['/cart']);
  }
  toggleCart(): void {
    this.showToggleCart = !this.showToggleCart;
  }


}
