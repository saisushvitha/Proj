import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchemp',
  templateUrl: './searchemp.component.html',
  styleUrls: ['./searchemp.component.scss']
})
export class SearchempComponent implements OnInit {

  public searchText : string;
  public customerData : any;
  constructor() { }

  ngOnInit() {
    this.customerData = [
      {"name": 'Anil kumar', "Dsg": 'manager', "ss" :'java'},
      {"name": 'Sunil Kumar Singh', "Dsg": 'teamlead', "ss" :'.net'},
      {"name": 'Sushil Singh', "Dsg": 'salesmanager', "ss" :'python'},
      {"name": 'Aradhya Singh', "Dsg": 'fresher', "ss" :'php'},
      {"name": 'Reena Singh', "Dsg": 'ceo',  "ss" :'sales'},
      {"name": 'Alok Singh', "Dsg": 'cto',  "ss" :'java'}];
  }
}
