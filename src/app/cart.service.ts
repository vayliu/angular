import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  constructor(
    private http:HttpClient
  ) { }
  // 加入购物车
  addToCart(product: Product) {
    this.items.push(product)
  }
  // 获取购物车内所有商品
  gteItems() {
    return this.items
  }
  // 清空购物车
  clearCart() {
    this.items = []
    return this.items
  }
  // 获取商品价格
  getShippingPrices() {
    return this.http.get<{type:string, price:number}[]>('/assets/shipping.json')
  }
}
