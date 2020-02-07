import {MacDialog} from "./Dialogs/MacDialog";
import {WindowDialog} from "./Dialogs/WindowDialog";

const myMacDialog = new MacDialog();
myMacDialog.createButton().onClick();
myMacDialog.createButton().render();

const myWindowDialog = new WindowDialog();
myWindowDialog.createButton().onClick();
myWindowDialog.createButton().render();
