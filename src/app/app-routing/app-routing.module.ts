import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../pages/home/home.component';
import { FormRegisterComponent } from '../component/form-register/form-register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppRoutingModule { }
