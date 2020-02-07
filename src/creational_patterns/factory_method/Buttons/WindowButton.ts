import {ButtonInterface} from "./ButtonInterface";

export class WindowButton implements ButtonInterface {
    public render(): void {
        console.log("I am rendered (window)")
    }
    public onClick(): void {
        console.log("I am clicked (window)")
    }
}