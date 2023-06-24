import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './component/shared/footer/footer.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './component/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './component/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { CheckoutComponent } from './component/shopping-cart/checkout/checkout.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart.reducer';
import { CartTableHeaderComponent } from './component/shopping-cart/cart/cart-table-header/cart-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent,
    ShoppingCartComponent,
    NavComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CheckoutComponent,
    CartTableHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ cartTotal: cartReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
