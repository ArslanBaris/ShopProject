import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http : HttpClient) { }

  path = "http://localhost:3000/products";
  
  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.path);
  }
}
