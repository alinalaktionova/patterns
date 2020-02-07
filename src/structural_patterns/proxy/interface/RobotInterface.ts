export interface RobotInterface {
  walkStraightForward(value: number): void;
  turnRight(): void;
  turnLeft(): void;
  defuseBomb(): void;
}
