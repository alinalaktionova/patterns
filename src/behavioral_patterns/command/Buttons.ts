import {Command} from "./Command";

class Button {
    private command: Command;
    public setCommand(command: Command) {
        this.command = command
    }
}

export class CopyButton extends Button{}
export class DeleteButton extends Button{}