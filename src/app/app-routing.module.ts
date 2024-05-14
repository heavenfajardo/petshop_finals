import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ShopComponent } from './shop/shop.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { AddToCartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout';
import { PaymentComponent } from './payment/payment.component';
import { PaymentWalkinComponent } from './payment-walkin/payment-walkin.component';
import { OrderConfirmationComponent } from './order-confirmation';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
    { path: 'addtocart', component: AddToCartComponent, canActivate: [AuthGuard] },
    { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
    { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
    { path: 'payment-walkin', component: PaymentWalkinComponent, canActivate: [AuthGuard]},
    { path: 'order-confirmation', component: OrderConfirmationComponent, canActivate: [AuthGuard]},
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
