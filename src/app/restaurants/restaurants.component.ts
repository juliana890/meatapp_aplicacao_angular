import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantService: RestaurantsService) {}

  restaurants: Restaurant[];

  //Este método carrega os components ao iniciar a tela
  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants();
  }

}
