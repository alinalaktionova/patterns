import { Director } from "./Director";
import {HouseBuilder} from "./builders/HouseBuilder";

export class Application {
  makeHouse() {
    const director = new Director();
    const builder = new HouseBuilder();
    director.constructHouse(builder);
    builder.getResult();
  }
}
