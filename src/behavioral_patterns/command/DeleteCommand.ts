import {Command} from "./Command";

export class DeleteCommand extends Command{
    public execute(): boolean {
        this.saveBackup();
        this.app.clipboard = this.editor.getSelection();
        this.editor.deleteSelection();
        return true;
    }
}