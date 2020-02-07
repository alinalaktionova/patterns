import {Dialog} from "./Dialog";
import {ButtonInterface} from "../Buttons/ButtonInterface";
import {MacButton} from "../Buttons/MacButton";

export class MacDialog extends Dialog {
    public createButton(): ButtonInterface {
        return new MacButton();
    }
}