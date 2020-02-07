import { RobotInterface } from './interface/RobotInterface';
import { Robot } from './Robot';

export class RobotProxy implements RobotInterface {
  private bombRobot: Robot;
  constructor(bombRobot: Robot = null) {
    this.bombRobot = bombRobot;
  }
  public walkStraightForward(value: number): void {
    this.checkConnectionToRobot();
    this.bombRobot.walkStraightForward(value);
  }
  public turnRight(): void {
    this.checkConnectionToRobot();
    this.bombRobot.turnRight();
  }

  public turnLeft(): void {
    this.checkConnectionToRobot();
    this.bombRobot.turnLeft();
  }
  public defuseBomb(): void {
    this.checkConnectionToRobot();
    this.bombRobot.defuseBomb();
  }
  private checkConnectionToRobot(): void {
    if (this.bombRobot === null) {
      this.bombRobot = new Robot();
    }
  }
}
