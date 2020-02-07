import {HunterInterface} from "./HunterInterface";
import {Rabbit} from "../Rabbit";

export class Hunter implements HunterInterface {
    public follow(rabbit: Rabbit) {
        console.log(`1 hunter: I know wh ere rabbit is: x: ${rabbit.x}, y: ${rabbit.y}`);
    }
}