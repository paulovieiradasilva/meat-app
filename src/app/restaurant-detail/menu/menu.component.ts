import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private restaurantService: RestaurantsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(this.router.parent.snapshot.params['id']);
  }

}
