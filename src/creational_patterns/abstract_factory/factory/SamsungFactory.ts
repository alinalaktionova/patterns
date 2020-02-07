import {Factory} from "../interfaces/factoryInterface";
import {DesktopInterface, PhoneInterface} from "../interfaces/deviceInterface";
import {SamsungDesktop} from "../Desktops/SamsungDesktop";
import {SamsungPhone} from "../Phones/SamsungPhone";

export class SamsungFactory implements Factory{
    createPhone(): PhoneInterface {
        return new SamsungPhone();
    }
    createDesktop(): DesktopInterface {
        return new SamsungDesktop();
    }
}