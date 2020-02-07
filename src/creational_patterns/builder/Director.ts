import {BuilderInterface} from "./interfaces/BuilderInterface";

export class Director {
    constructHouse(builder: BuilderInterface){
        builder.reset();
        builder.setWalls(10);
        builder.setDoors(4);
        builder.setRoof(true);
    }
}