import {ComponentWithContextualHelpInterface} from "../interface/InterfaceComponentWithContextualHelp";
import {Container} from "../containers/Container";

export abstract class Component implements ComponentWithContextualHelpInterface{
    public container: Container;
    constructor( protected tooltipText: string){
        this.tooltipText = tooltipText;
    }

    public showHelp(): void {
        if(this.tooltipText != null){
            console.log(`Basic help: ${this.tooltipText}`)
        } else {
            this.container.showHelp();
        }
    }
}