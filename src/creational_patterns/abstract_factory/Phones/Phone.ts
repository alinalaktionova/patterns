import {PhoneInterface} from "../interfaces/deviceInterface";

export abstract class Phone implements PhoneInterface {
    protected state = false;

    constructor() {
    }

    public on(): void {
        this.state = true
    }

    public off(): void {
        this.state = false
    }
    abstract call(): void
}
