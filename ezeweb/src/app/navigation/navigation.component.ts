import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';
declare var jQuery: any;



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 200) {
          $('.header-top-area').addClass('menu-bg');
      } else {
          $('.header-top-area').removeClass('menu-bg');
      }
  });
  }
 

 

}
