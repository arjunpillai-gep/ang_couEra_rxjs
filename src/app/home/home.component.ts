import { Component, OnInit } from '@angular/core';
import {DishService} from "../service/dish.service";
import {PromotionService} from "../service/promotion.service";
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dish:Dish;
promotion:Promotion


  constructor(private dishservice:DishService,private promotionservice:PromotionService) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe((dish)=>this.dish = dish)
    
    this.promotion = this.promotionservice.getFeaturedPromotion()
  }

}
