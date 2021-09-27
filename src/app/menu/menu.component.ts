import { Component, OnInit,Input } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from "../service/dish.service"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes:Dish[]
  selectedDish:Dish
  constructor(private dishservice:DishService) { }

  ngOnInit() {
    this.dishservice.getDishes()
    .subscribe((dishes)=>this.dishes = dishes)
  }
  SelectDish(dish:Dish){
    this.selectedDish = dish
  }

}
