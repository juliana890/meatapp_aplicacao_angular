import { MenuItem } from "../menu-item/menu-item.model";

//Declaração dos itens do carrinho de compras
export class CartItem {
    constructor(
        public menuItem: MenuItem,
        public quantity: number = 1 //Se não for passado a quantidade ele já entra valendo 1
    ){}

    value(): number{
        return this.menuItem.price * this.quantity;
    }
}