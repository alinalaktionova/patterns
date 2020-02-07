import {Command} from "./Command";
import {Editor} from "./Editor";


const editor = new Editor();
editor.setSelectionWidth(34);
editor.setText("hello");
const command = new Command(editor);
command.makeBackUp();
command.undo();