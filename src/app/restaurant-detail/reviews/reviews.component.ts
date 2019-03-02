import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "../../restaurants/restaurants.service";
import { Observable } from "rxjs";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.css"]
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  constructor(
    private restaurantService: RestaurantsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(
      this.router.parent.snapshot.params["id"]
    );
  }
}
