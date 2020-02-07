import {ButtonInterface} from "./ButtonInterface";

export class MacButton implements ButtonInterface {
    public render(): void {
        console.log("I am rendered (mac)")
    }
    public onClick(): void {
        console.log("I am clicked (mac)")
    }
}