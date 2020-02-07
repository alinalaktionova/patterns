export interface BuilderInterface {
    reset(): void
    setWalls(arg: number): void
    setDoors(arg: number): void
    setRoof(arg: boolean): void
}