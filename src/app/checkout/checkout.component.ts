import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@app/_services/cart.service'; // Adjust the path as necessary

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  cartItems: { name: string, price: number, quantity: number }[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  finalizeOrder(): void {
    this.cartService.clearCart();
    this.router.navigate(['/order-confirmation']); // Adjust the path as necessary
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  goToPayment(): void {
    this.router.navigate(['/payment']);
  }

  goToPaymentWalkin(): void {
    this.router.navigate(['/payment-walkin']);
  }
}
