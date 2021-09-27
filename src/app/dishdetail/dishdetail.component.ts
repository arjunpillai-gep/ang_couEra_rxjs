import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../service/dish.service';
import { LeaderService } from '../service/leader.service';
import { Dish } from '../shared/dish';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
dishId:any
dish:Dish
leader:any
  constructor(private leaderService:LeaderService, private actRoute:ActivatedRoute,private dishService:DishService,private location:Location) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(c=>{
      this.dishId = c['id']
      this.dishService.getDish(this.dishId)
      .subscribe((dish)=>this.dish = dish)
      this.leader = this.leaderService.getParticularLeader(this.dishId)

    })
  }
goBack(){
  this.location.back();
}  

}
