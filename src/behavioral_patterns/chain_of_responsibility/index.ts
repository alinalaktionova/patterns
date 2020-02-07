import {Dialog} from "./containers/Dialog";
import {Panel} from "./containers/Pannel";
import {Button} from "./components/Button";

const dialog = new Dialog("Hello from dialog", "http//:8000");
const panel = new Panel("Hello from panel", "I can help you");
const button = new Button("Button hello");

panel.add(dialog);
dialog.add(button);
