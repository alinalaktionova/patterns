import {Car} from "./Car";

export class Driver {
    public canDrive(transport: Car): void {
    transport.drive();
  }
}
