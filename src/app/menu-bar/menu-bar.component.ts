import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  public buttons = ['Nome do Menu1','Nome do Menu 2','Nome do Menu 3','Nome do Menu 4','Nome do Menu 5']
  constructor() { }

  ngOnInit() {
  }

}
