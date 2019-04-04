
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit  {
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  showNavItem: string = "";
  rememberLastNav: any = "";
  @ViewChild('navULRef') navULRefVC: ElementRef;
  @ViewChild('navitemRef') navItemRefVC: ElementRef;
  @ViewChild('mainnav') mainnavRefVC: ElementRef;
  public samplePagesCollapsed = true;
  
 
  
  constructor() { }

  ngOnInit() {
  }

}
