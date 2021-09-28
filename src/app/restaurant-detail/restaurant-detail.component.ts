import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute){}

  restaurant: Restaurant;

  ngOnInit() {
    //Utilizamos o ActivateRoute para pegarmos o parâmetro id definido na nossa rota com snapshot
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
        .subscribe(response => this.restaurant = response);
  }

}
