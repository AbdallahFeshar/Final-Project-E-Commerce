import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 constructor(private _HttpClient: HttpClient) {}


 getAllProduct(): Observable<any> {
   return this._HttpClient.get(
     ` https://ecommerce.routemisr.com/api/v1/products`
   );
 }

 getProductDetails(id: string): Observable<any> {
   return this._HttpClient.get(
     `https://ecommerce.routemisr.com/api/v1/products/${id}`
   );
 }

 getcat(): Observable<any> {
   return this._HttpClient.get(
     `https://ecommerce.routemisr.com/api/v1/categories`
   );
 }


 getAllProductss(num: number = 1): Observable<any> {
   return this._HttpClient.get(
     ` https://ecommerce.routemisr.com/api/v1/products?page=${num}&limit=12`
   );
 }


 getcatspec(id: string): Observable<any> {
   return this._HttpClient.get(
     `https://route-ecommerce.onrender.com/api/v1/categories/${id}/subcategories`
   );
 }
}
