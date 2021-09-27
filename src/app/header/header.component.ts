import { Component, OnInit } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUtensil1:any

  constructor() { }

  ngOnInit() {
    this.faUtensil1 = faUtensils
  }


}
