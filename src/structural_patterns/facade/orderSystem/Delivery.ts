import {ItemsStorage} from "./ItemsStorage";

export class Delivery {
    private deliveryCost: number = 40;
    constructor(private item: string, private items: ItemsStorage){
        for( const concItem of items.getItems()) {
           if(concItem.name === item) {
                this.item = item;
               this.items = items;
           }
            console.log("Please choose something from store (book, pen or paper)")
        }
    }
    public deliver() {
        console.log(`Deliver: ${this.item}`)
    }
    public getTotalCost() {
        const item =  this.items.getItems().find(el => el.name === this.item);
        return this.deliveryCost + item.cost;
    }
}