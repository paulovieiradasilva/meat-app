import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('400ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant;

  restaurantState: string = 'ready';

  constructor() { }

  ngOnInit() {
  }

}
