import {Command} from "./Command";

export class CommandHistory {
    private history: Array<Command> = [];
    public add(command: Command) {
        this.history.push(command)
    }

    public delete(): Command{
        return this.history.pop();
    }
}