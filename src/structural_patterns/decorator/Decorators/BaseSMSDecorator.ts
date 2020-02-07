import {NotifierInterface} from "../interfaces/NotifierInterface";

export class BaseSMSDecorator implements NotifierInterface{
    constructor(private wrappee: NotifierInterface){
        this.wrappee = wrappee;
    }
    public send(message: string): void {
       this.wrappee.send(message)
    }
}