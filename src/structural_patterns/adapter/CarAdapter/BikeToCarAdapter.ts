import {Bike} from "../Bike";
import {Car} from "../Car";

export class BikeToCarAdapter extends Car{
    private transport: Bike;
    constructor (transport: Bike) {
        super();
        this.transport = transport;
    }
    public drive() {
        return this.transport.ride();
    }
}