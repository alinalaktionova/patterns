import {HunterInterface} from "./HunterInterface";
import {Rabbit} from "../Rabbit";

export class SecondHunter implements HunterInterface {
    public follow(rabbit: Rabbit) {
        console.log(`2 hunter: I know wh ere rabbit is: x: ${rabbit.x}, y: ${rabbit.y}`);
    }
}