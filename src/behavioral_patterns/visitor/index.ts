import {Dot} from "./Shapes/Dot";
import {XMLVisitor} from "./XMLVisitor";
import {Circle} from "./Shapes/Circle";

const dot = new Dot(12, 56);
const circle = new Circle(34,89);
dot.accept(new XMLVisitor());
circle.accept(new XMLVisitor());