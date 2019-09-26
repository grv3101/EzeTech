import { Component , OnInit} from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'ezeweb';

  constructor() { }

  ngOnInit() {
    <any> $(window).load(() => {
      'use strict';
     <any> $('#loader').fadeOut();
     });

    $(() => {
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40,
        responsive: true
      });
    });
  }
}
