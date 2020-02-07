import {ButtonInterface} from "../Buttons/ButtonInterface";

export abstract class Dialog {
    abstract createButton(): ButtonInterface
}