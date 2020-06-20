import { Product } from './product.model';
export class SimpleDataSource {
  private products: Product[];
  constructor() {
    this.products = new Array<Product>(
      new Product(1, 'Samsung S8', 'good phone', '1.jpg', 1100),
      new Product(2, 'Samsung S9', 'good phone', '2.jpg', 1800),
      new Product(3, 'Samsung S10', 'good phone', '3.jpg', 2150),
      new Product(4, 'Samsung S10+', 'good phone', '4.jpg', 3000),
      new Product(5, 'Samsung A7', 'good phone', '5.jpg', 700)
    );
  }
  getProducts(): Product[] {
    return this.products;
  }
}
