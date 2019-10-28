import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    
    $("#logo").click(function (e) {
      e.preventDefault();
      $("header").css("background", "rgb(236, 109, 87)");
    });

    
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 400
      });
  }

}
