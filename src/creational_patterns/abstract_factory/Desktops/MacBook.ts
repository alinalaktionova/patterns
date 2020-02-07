import {DesktopInterface, PhoneInterface} from "../interfaces/deviceInterface";
import {Desktop} from "./Desktop";

export class MacBook extends Desktop {

    public play(): void {
        console.log("MacBook is playing...")
    }
}