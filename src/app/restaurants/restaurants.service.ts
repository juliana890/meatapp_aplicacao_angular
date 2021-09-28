import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { Http } from "@angular/http"; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";

//Pra uma classe de serviço receber outra classe de serviço por injeção de depêndencia utilizamos o Injectable()
@Injectable()
export class RestaurantsService{
    
    constructor(private http: Http){}

    //O http retorna um Observable por isso passamos o tipo como Restaurant
    restaurants(): Observable<Restaurant[]> {
        //Mapeamos a resposta para podermos trocar para um json
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    } 
}