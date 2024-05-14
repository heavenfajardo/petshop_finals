import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@app/_services/cart.service'; // Adjust the path as necessary

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './addtocart.component.html'
})
export class AddToCartComponent implements OnInit {
  cartItems: { name: string, price: number, quantity: number }[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(productName: string): void {
    this.cartService.removeItem(productName);
    this.loadCartItems();
  }

  decreaseQuantity(item: { name: string, price: number, quantity: number }): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.updateCartItems(this.cartItems);
    } else {
      this.removeItem(item.name);
    }
  }

  increaseQuantity(item: { name: string, price: number, quantity: number }): void {
    item.quantity += 1;
    this.cartService.updateCartItems(this.cartItems);
  }

  addToCart(productName: string, price: number): void {
    this.cartService.addItem(productName, price);
    this.loadCartItems();
  }

  goToShop(): void {
    this.router.navigate(['/shop']);
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
