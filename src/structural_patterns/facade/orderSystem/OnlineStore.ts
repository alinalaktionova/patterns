import { ItemsStorage } from "./ItemsStorage";
import { Delivery } from "./Delivery";

export class OnlineStore {
  public makeOrder(item: string) {
    const storage = new ItemsStorage();
    const delivery = new Delivery(item, storage);
    console.log("Your order was made successfully");
    console.log(`Total cost: ${delivery.getTotalCost()}`);
  }
}
