import {GameAI} from "./GameAI";

export class MonsterAI extends GameAI {
    public buildUnits(): void {
        console.log("We don`t need units")
    }
}