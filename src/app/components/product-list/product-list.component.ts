import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];


  constructor(private http: HttpClient, public cartService: CartService) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe(products => {
        this.products = products;
      });
  }

  addToCart(item: Product): void {
    this.cartService.addToCart(item);
  }

}
