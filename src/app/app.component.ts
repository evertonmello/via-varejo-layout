import { Component, OnInit } from '@angular/core';
import * as data from './../../side_bar.js';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'app';
  public itemMenuNav = ['item1', 'item2', 'item3']
  public carItens = ['tv1', 'tv2', 'tv3', 'tv4']
  public data = data;
  ngOnInit(){
    console.log(data)
    $('.carousel[data-type="multi"] .item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    
      for (var i = 0; i < 1; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
    
        next.children(':first-child').clone().appendTo($(this));
      }
    });

  }
}


