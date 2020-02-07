import {Component} from "../components/Component";

export abstract class Container extends Component {
    protected children: Array<Component> = [];

    public add(child: Component) {
        this.children.push(child);
        child.container = this;
    }
}