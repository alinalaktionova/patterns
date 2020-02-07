import {Phone} from "./Phone";

export class SamsungPhone extends Phone {
    public call(): void {
        console.log("Samsung calling...")
    }
}