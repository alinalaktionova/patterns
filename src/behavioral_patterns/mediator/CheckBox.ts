import {Component} from "./Component";

export class CheckBox extends Component {
    public check() {
        this.dialog.notify(this, "check")
    }
}