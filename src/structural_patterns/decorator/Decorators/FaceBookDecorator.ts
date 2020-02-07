import {BaseSMSDecorator} from "./BaseSMSDecorator";

export class FaceBookDecorator extends BaseSMSDecorator {
    public send(message: string){
        super.send(message);
        this.sendByFaceBook(message)
    }
    public sendByFaceBook(message: string) {
        console.log(`Send by FaceBook: ${message}`)
    }
}