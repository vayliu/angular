import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  constructor() { }
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
}
