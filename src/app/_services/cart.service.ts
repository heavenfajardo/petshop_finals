import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: { name: string, price: number, quantity: number }[] = [];

  constructor() {
    this.loadCartItems();
  }

  addItem(item: { name: string, price: number, quantity: number }): void {
    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      // If item already exists in cart, update its quantity
      this.cartItems[existingItemIndex].quantity += item.quantity;
    } else {
      // Otherwise, add the item to the cart
      this.cartItems.push(item);
    }
    this.saveCartItems();
  }

  getCartItems(): { name: string, price: number, quantity: number }[] {
    return this.cartItems;
  }

  loadCartItems(): void {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }

  saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeItem(productName: string): void {
    this.cartItems = this.cartItems.filter(item => item.name !== productName);
    this.saveCartItems();
  }

  updateCartItems(items: { name: string, price: number, quantity: number }[]): void {
    this.cartItems = items;
    this.saveCartItems();
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems();
  }
}
