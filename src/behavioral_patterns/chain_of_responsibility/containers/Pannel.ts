import {Container} from "./Container";

export class Panel extends Container{
    constructor( tooltip: string ,protected modalTextHelp: string ){
        super(tooltip);
        this.modalTextHelp = modalTextHelp;
    }

    public showHelp(): void {
        if( this.modalTextHelp != null) {
            console.log(`Modal panel help: ${this.modalTextHelp}`)
        }
        super.showHelp();
    }
}