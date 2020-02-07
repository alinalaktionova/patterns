import {MediatorInterface} from "./MediatorInterface";

export class Component {
    constructor(protected dialog: MediatorInterface) {
        this.dialog = dialog
    }
    public click() {
        this.dialog.notify(this, "click");
    }
    public keyPress() {
        this.dialog.notify(this, "key press")
    }
}