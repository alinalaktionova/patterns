import {StrategyInterface} from "./StrategyInterface";

export class WalkStrategy implements StrategyInterface {
    public buildRoute(): void {
        console.log("Walk route was built")
    }
}