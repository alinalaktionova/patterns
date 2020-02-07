import {StrategyInterface} from "./StrategyInterface";

export class RoadStrategy implements StrategyInterface {
    public buildRoute(): void {
        console.log("Road route was built")
    }
}