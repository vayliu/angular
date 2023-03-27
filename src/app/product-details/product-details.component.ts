import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product:Product) {
    this.cartService.addToCart(product)
    window.alert("添加成功")
  }

  ngOnInit() {
    // 从路由中获取 productId
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"))
    // 查找与路由中提供的id相对应的产品
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
