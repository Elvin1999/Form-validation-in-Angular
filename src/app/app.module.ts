import { ProductComponent } from './product.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputEmailDirective } from './input-email.directive';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent, InputEmailDirective],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [ProductComponent],
})
export class AppModule {}
