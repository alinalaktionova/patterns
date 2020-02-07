import {StrategyInterface} from "./StrategyInterface";

export class PublicTransportStrategy implements StrategyInterface {
    public buildRoute(): void {
        console.log("Public Transport route was built")
    }
}