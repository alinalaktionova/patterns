import {Command} from "./Command";

export class CopyCommand extends Command {
    public execute(): boolean {
        this.app.clipboard = this.editor.getSelection();
        return false;
    }
}