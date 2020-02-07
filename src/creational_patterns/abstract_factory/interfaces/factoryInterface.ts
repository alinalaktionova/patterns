import {DesktopInterface, PhoneInterface} from "./deviceInterface";

export interface Factory {
    createPhone(): PhoneInterface
    createDesktop(): DesktopInterface
}