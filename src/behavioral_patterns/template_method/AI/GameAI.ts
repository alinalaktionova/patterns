export abstract class GameAI {
    public takeTurn() {
        this.buildUnits();
        this.attack();
    }
    abstract buildUnits(): void
    public attack() {
        console.log("We are attacking")
    }
    public sendWarriors(position: number): void {
        console.log(`Warriors are at ${position} position`)
    }

}