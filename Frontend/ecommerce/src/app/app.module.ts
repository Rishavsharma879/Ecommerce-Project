import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './customer/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './customer/product-detail/product-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartComponent } from './customer/cart/cart.component';
import { OrderSuccessComponent } from './customer/order-success/order-success.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductListComponent } from './admin/admin-panel/product-list/product-list.component';
import { AddProductComponent } from './admin/admin-panel/add-product/add-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    OrderSuccessComponent,
    SignUpComponent,
    LoginComponent,
    AdminPanelComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ToastrModule,
    RouterModule,
    MatTooltipModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(), 
    provideToastr(), provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }