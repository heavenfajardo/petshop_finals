import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-payment-walkin',
    templateUrl: './payment-walkin.component.html'
})
export class PaymentWalkinComponent {
    paymentDetails = {
        fullName: '',
        contactNumber: '',
        amount: 0
    };

    constructor(private router: Router) {}

    payNow(): void {
        // Simulate payment processing
        console.log('Payment details:', this.paymentDetails);
        
        // Navigate to order confirmation with payment details
        this.router.navigate(['/order-confirmation'], { state: { paymentDetails: this.paymentDetails }});
    }
}
