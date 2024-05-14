import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    Role = Role;
    account: Account;

    constructor(private accountService: AccountService, private cartService: CartService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    logout() {
        this.accountService.logout();
    }

    addToCart(productName: string, price: number): void {
        this.cartService.addItem({ name: productName, price: price });
        alert('Added to cart: ' + productName);
    }
}
