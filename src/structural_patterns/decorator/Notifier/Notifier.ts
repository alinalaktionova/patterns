import {NotifierInterface} from "../interfaces/NotifierInterface";

export class Notifier implements NotifierInterface {
    send(message: string): void {
        console.log(`Send by SMS: ${message}`)
    }
}