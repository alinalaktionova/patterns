import {Editor} from "./Editor";
import {Application} from "./Application";

export abstract class Command {
    constructor(protected app: Application, protected editor: Editor, protected backup: string) {
        this.app = app;
        this.editor = editor;
        this.backup = backup;
    }

    public saveBackup() {
        this.backup = this.editor.text;
    }

    public undo() {
        this.editor.text = this.backup;
    }

    abstract execute(): boolean;
}
