import {ItemInterface} from "../interfaces/ItemInterface";

export class ItemsStorage {
    private items: Array<ItemInterface> = [{name: "book", cost: 200}, {name: "pen", cost: 20}, {name: "paper", cost: 100}];
    public getItems() {
        return this.items
    }
}