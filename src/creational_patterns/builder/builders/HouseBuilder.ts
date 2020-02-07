import {BuilderInterface} from "../interfaces/BuilderInterface";
import {House} from "../House";

export class HouseBuilder implements BuilderInterface {
    private house: House;
    public reset(): void {
        this.house = new House();
    }

    public setDoors(doors: number): void {
        this.house.setDoors(doors);
    }

    public setRoof(roof: boolean): void {
        this.house.setRoof(roof)
    }

    public setWalls(walls: number): void {
        this.house.setWalls(walls);
    }

    public getResult(): House {
        console.log("I am built");
        return this.house
    }
}