import {CommandHistory} from "./CommandHistory";
import {Editor} from "./Editor";
import {Command} from "./Command";
import {CopyButton, DeleteButton} from "./Buttons";
import {CopyCommand} from "./CopyCommand";
import {DeleteCommand} from "./DeleteCommand";

export class Application {
    private editors: Array<Editor> = [];
    constructor(private history: CommandHistory,  private activeEditor: Editor, public clipboard: string){
        this.activeEditor = activeEditor;
        this.clipboard = clipboard;
        this.history = history;
    }

    public executeCommand(command: Command) {
        if(command.execute()) {
            this.history.add(command);
        }
    }
/*
    public undo() {
        const command = this.history.delete();
        if(command != null){
            command.undo();
        }
    }*/

    public createUI() {
        const copyButton = new CopyButton();
        const copy = new CopyCommand(this, this.activeEditor, this.clipboard);
        copyButton.setCommand(copy);

        const deleteOperation = new DeleteCommand(this, this.activeEditor, this.clipboard);
        const deleteButton = new DeleteButton();
        deleteButton.setCommand(deleteOperation);
    }
}