import {Container} from "./Container";

export class Dialog extends Container{
    constructor( tooltip: string ,protected wikiURL: string ){
        super(tooltip);
        this.wikiURL = wikiURL;
    }

    public showHelp(): void {
        if( this.wikiURL != null) {
            console.log(`Dialog help. Go to this url: ${this.wikiURL}`)
        }
        super.showHelp();
    }
}