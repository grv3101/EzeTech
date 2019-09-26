import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    <any> $(() => {
      <any> $('#portfolio').mixItUp();
    });

    jQuery(document).ready(( $ ) => {
      $('.lightbox').nivoLightbox({
       effect: 'fadeScale',
       keyboardNav: true,
     });
 
   });
  }

}
