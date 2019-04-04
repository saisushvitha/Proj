import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  name :string;
  cash :number;
  desc :string;
  card :Object[];


  constructor() {
    this.card= [{
        name :"total revenue",
        cash :65650,
        desc :"lower gross"
    },
    {
      name :"orders",
      cash :3455,
      desc :"product use sales"
  },
  {
    name :"sales",
    cash :5693,
    desc :"weekly sales"
},
{
  name :"employees",
  cash :246,
  desc :"product available"
},

    ];
   }

  ngOnInit() {
    
  }

}
