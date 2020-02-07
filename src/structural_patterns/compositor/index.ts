import {CompoundGraphic} from "./compositorGraphics/CompoundGraphic";
import {Dot} from "./graphics/Dot";
import {Rectangle} from "./graphics/Rectangle";

const components = new CompoundGraphic();
components.add(new Dot(4, 6));
components.add(new Rectangle(10,23,45,32));

components.move(10,15);
components.draw();