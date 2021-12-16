import { Component, OnInit } from '@angular/core';
import { Product } from './product';

declare let alertify : any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  title = 'Ürün Listesi';
  filterText = ""
  products: Product[] = [  
    { id: 1, name: 'Laptop', price: 2500, categoryId: 1, description: 'Asus ZenBook',imageUrl:"https://cdn.cimri.io/image/1000x1000/apple-macbook-air-mgne3tu-a-m1-8gb-ram-512gb-ssd-macos-13-inc-altin-laptop-notebook_301029058.jpg" },
    { id: 2, name: 'Mouse', price: 120, categoryId: 2, description: 'A4 Tech',imageUrl:"https://cdn.cimri.io/image/1000x1000/apple-macbook-air-mgne3tu-a-m1-8gb-ram-512gb-ssd-macos-13-inc-altin-laptop-notebook_301029058.jpg" },
    { id: 1, name: 'Bilgisayar', price: 2500, categoryId: 1, description: 'Asus ZenBook',imageUrl:"https://cdn.cimri.io/image/1000x1000/apple-macbook-air-mgne3tu-a-m1-8gb-ram-512gb-ssd-macos-13-inc-altin-laptop-notebook_301029058.jpg"  },
    { id: 2, name: 'Kulaklık', price: 120, categoryId: 2, description: 'A4 Tech' ,imageUrl:"https://cdn.cimri.io/image/1000x1000/apple-macbook-air-mgne3tu-a-m1-8gb-ram-512gb-ssd-macos-13-inc-altin-laptop-notebook_301029058.jpg" },
    { id: 1, name: 'Monitör', price: 2500, categoryId: 1, description: 'Asus ZenBook',imageUrl:"https://cdn.cimri.io/image/1000x1000/apple-macbook-air-mgne3tu-a-m1-8gb-ram-512gb-ssd-macos-13-inc-altin-laptop-notebook_301029058.jpg"  },
    { id: 2, name: 'Mouse', price: 120, categoryId: 2, description: 'A4 Tech' ,imageUrl:"https://cdn.cimri.io/image/1000x1000/apple-macbook-air-mgne3tu-a-m1-8gb-ram-512gb-ssd-macos-13-inc-altin-laptop-notebook_301029058.jpg" },
    { id: 1, name: 'Laptop', price: 2500, categoryId: 1, description: 'Asus ZenBook',imageUrl:"https://cdn.cimri.io/image/1000x1000/apple-macbook-air-mgne3tu-a-m1-8gb-ram-512gb-ssd-macos-13-inc-altin-laptop-notebook_301029058.jpg"  },
    { id: 2, name: 'Kulaklık', price: 120, categoryId: 2, description: 'A4 Tech' ,imageUrl:"https://cdn.cimri.io/image/1000x1000/apple-macbook-air-mgne3tu-a-m1-8gb-ram-512gb-ssd-macos-13-inc-altin-laptop-notebook_301029058.jpg" }
];

  ngOnInit(): void {}

  addToCard(product:Product){
    alertify.success(product.name + " added.")
  }
}
