import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MenuComponent} from "./menu/menu.component"
import {DishService} from "./service/dish.service"
import {DishdetailComponent} from "../app/dishdetail/dishdetail.component"
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"home",
  component:HomeComponent
  },
  {path:"menu",
  component:MenuComponent
  },
  {path:"about",
  component:AboutComponent
  },
  {path:"contact",
  component:ContactComponent
  },
  {path:"dishdetail",
  component:DishdetailComponent
  },
  {path:"login",
  component:LoginComponent
  },
  {path:"",
  component:HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
