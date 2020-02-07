import {BaseSMSDecorator} from "./BaseSMSDecorator";

export class EmailDecorator extends BaseSMSDecorator {
    public send(message: string){
        super.send(message);
        this.sendByEmail(message)
    }
    public sendByEmail(message: string) {
        console.log(`Send by Email: ${message}`)
    }
}