import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'img-animation',
  templateUrl: './img-animation.component.html',
  styleUrls: ['./img-animation.component.css'],
  animations: [
    
    trigger('imageRace', [
      transition(':enter', [
        query('.race', style({ opacity: 0 })),
        query('.race', [
          stagger(400, [
            animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1}))
          ])
        ])
      ])
    ])

  ]
})
export class ImgAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
