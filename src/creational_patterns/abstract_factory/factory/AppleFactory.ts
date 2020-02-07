import {Factory} from "../interfaces/factoryInterface";
import {DesktopInterface, PhoneInterface} from "../interfaces/deviceInterface";
import {iPhone} from "../Phones/iPhone";
import {MacBook} from "../Desktops/MacBook";

export class AppleFactory implements Factory{
    createPhone(): PhoneInterface {
        return new iPhone();
    }
    createDesktop(): DesktopInterface {
        return new MacBook();
    }
}

