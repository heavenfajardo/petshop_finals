import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Import CartService
import { CartService } from './_services/cart.service'; 

// Import all components and services
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { fakeBackendProvider } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { ShopComponent } from './shop';
import { AddToCartComponent } from './addtocart';
import { CheckoutComponent } from './checkout';
import { PaymentComponent } from './payment';
import { PaymentWalkinComponent } from './payment-walkin';
import { OrderConfirmationComponent } from './order-confirmation';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        ShopComponent,
        AddToCartComponent,
        CheckoutComponent,
        PaymentComponent,
        PaymentWalkinComponent,
        OrderConfirmationComponent
    ],
    providers: [
     
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        CartService,
  
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
