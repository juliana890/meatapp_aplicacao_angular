import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartService{
    items: CartItem[] = [];

    addItem(item: MenuItem){
        //Se o item de menu já estiver no carrinho só acrescenta a quantidade
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1;
        }else{
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem){
        //Para remover o item utilizamos o slice passando o indíce 
        this.items.splice(this.items.indexOf(item), 1);
    }

    clear(){
        this.items = [];
    }

    total(): number{
        //.reduce soma os dois valores antigo + atual
        return this.items.map(item => item.value()).reduce((prev, value)=> prev + value, 0);
    }


}