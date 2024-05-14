import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/_services';
import { CartService } from '@app/_services/cart.service'; // Import CartService

@Component({
  templateUrl: 'shop.component.html'
})
export class ShopComponent {
  account = this.accountService.accountValue;

  constructor(
    private accountService: AccountService, 
    private router: Router,
    private cartService: CartService // Inject CartService
  ) { }

  addToCart(productName: string): void {
    this.cartService.addItem(productName); // Use CartService to add item
    this.router.navigate(['/addtocart']);
  }
}
