import { Injectable } from '@angular/core';
import { resolve } from 'url';
import {Dish} from "../shared/dish";
import {Dishes} from "../shared/dishes"
import {Observable, of} from "rxjs"
import {delay} from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Observable<Dish[]> {
    return of(Dishes).pipe(delay(4000))
  }
  getDish(id:string):Observable<Dish>{
    return of(Dishes.filter((dish)=>(dish.id ===id))[0]).pipe(delay(4000))
  }
  getFeaturedDish():Observable<Dish>{
    return of(Dishes.filter((dish)=>dish.feature)[0]).pipe(delay(4000))
  }
}