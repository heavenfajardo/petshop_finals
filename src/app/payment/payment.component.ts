import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@app/_services/cart.service'; // Adjust the path as necessary

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {
  fullName: string = '';
  gcashName: string = '';
  gcashNumber: string = '';
  amount: number = 0;

  cartItems: { name: string, price: number, quantity: number }[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.amount = this.getTotalPrice();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  submitPayment(): void {
    // Implement payment logic here
    // After successful payment:
    this.cartService.clearCart();
    this.router.navigate(['/order-confirmation']);
  }
}
