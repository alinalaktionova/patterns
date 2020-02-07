import {RobotProxy} from "./RobotProxy";

const proxy = new RobotProxy();
proxy.turnLeft();
proxy.walkStraightForward(25);
proxy.turnRight();
proxy.defuseBomb();