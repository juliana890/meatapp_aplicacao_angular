import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";


//Arquivo de rotas da nossa aplicação, utilizamos a tipagem Routes do Angular
export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},  //Mostrando o conteúdo da página restaurants
    {path: 'restaurants/:id', component: RestaurantDetailComponent}, //':' indica parâmetro na rota
    {path: 'about', component: AboutComponent}  //Mostrando o conteúdo da página about
];