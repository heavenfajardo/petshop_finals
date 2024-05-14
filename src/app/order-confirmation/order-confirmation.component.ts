import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-order-confirmation',
    templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmationComponent {
    @Input() paymentDetails: any;
}
