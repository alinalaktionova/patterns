import {GameAI} from "./GameAI";

export class OrksAI extends GameAI {
    public buildUnits(): void {
        console.log("We are building units")
    }
    public sendWarriors(position: number): void {
        console.log(`Warriors are at ${position} position`)
    }
}