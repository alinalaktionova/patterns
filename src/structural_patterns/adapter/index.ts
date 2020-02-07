import {Bike} from "./Bike";
import {Car} from "./Car";
import {Driver} from "./Driver";
import {BikeToCarAdapter} from "./CarAdapter/BikeToCarAdapter";


const car = new Car();
const driver = new Driver();

driver.canDrive(car);

const bike = new Bike();
const adapter = new BikeToCarAdapter(bike);

driver.canDrive(adapter);
