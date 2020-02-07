import { RobotInterface } from './interface/RobotInterface';

export class Robot implements RobotInterface {
  public walkStraightForward(value: number): void {
    console.log(`I walked ${value} steps`);
  }
  public turnRight(): void {
    console.log('I turned right');
  }
  public turnLeft(): void {
    console.log('I turned left');
  }
  public defuseBomb(): void {
    console.log('The bomb is defused');
  }
}
