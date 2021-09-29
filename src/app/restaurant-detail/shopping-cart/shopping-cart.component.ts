import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  //Método que vai expor os itens
  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear(){
    this.shoppingCartService.clear();
  }

  //Método que vai expor o total dos valores
  total(): number {
     return this.shoppingCartService.total();
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item);
  }

}
