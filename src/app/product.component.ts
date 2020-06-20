import { ProductRepository } from './repository.model';
import { Component } from '@angular/core';
import { Product } from './product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
  model: ProductRepository = new ProductRepository();
  color: string = 'red';
  today: number = Date.now();
  selectedProduct: string;
  newProduct: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    console.log('New product : ' + this.jsonProduct);
  }
  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted=false;
    }
  }
  getValidationErrors(state: any) {
    let ctrlName: string = state.name;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push('You must enter a ' + ctrlName);
            break;
          case 'minlength':
            messages.push('Min. 3 characters for ' + ctrlName);
            break;
          case 'pattern':
            messages.push(ctrlName + ' contains illegal characters');
            break;
        }
      }
    }
    return messages;
  }

  getClasses(id: number): string {
    const product = this.model.getProductById(1);
    return (product.price <= 2000 ? 'bg-info' : 'bg-primary') + ' m-2 p-2';
  }
  getClassMap(id: number): Object {
    const product = this.model.getProductById(id);

    return {
      'bg-info': product.price <= 1000,
      'bg-secondary': product.price > 1000,
      'text-center text-white': product.name === 'Samsung S8',
    };
  }
  onSubmit($event) {
    console.log('button was clicked');
    console.log($event);
  }
  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter was clicked . . .');
      console.log($event.target.value);
    }
  }
  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }
}
