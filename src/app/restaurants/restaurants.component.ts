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
    //Agora podemos chamar nosso método do serviço com subscribe atribuindo a resposta('response') ao nosso array de restaurants
    this.restaurantService.restaurants()
      .subscribe(response => this.restaurants = response);
  }

}
