import {Dialog} from "./Dialog";
import {ButtonInterface} from "../Buttons/ButtonInterface";
import {WindowButton} from "../Buttons/WindowButton";

export class WindowDialog extends Dialog {
    public createButton(): ButtonInterface {
        return new WindowButton();
    }
}