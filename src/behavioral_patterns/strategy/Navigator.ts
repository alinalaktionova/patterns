import {StrategyInterface} from "./strategies/StrategyInterface";

export class Navigator {
    strategy: StrategyInterface;
    public setStrategy(strategy: StrategyInterface){
        this.strategy = strategy
    }
    public buildRoute() {
        this.strategy.buildRoute()
    }
}