import {HunterInterface} from "./hunters/HunterInterface";

export class Rabbit {
    private hunters: Array<HunterInterface> =[];
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public move(x: number, y: number) {
        this.x += x;
        this.y += y;
        this.notify();
    }
    public addHunter(hunter: HunterInterface) {
        this.hunters.push(hunter);
    }
    public getCoords() {
        return
    }

    public deleteHunter(hunter: HunterInterface) {
        this.hunters.filter(hunt => hunt != hunter)
    }

    public notify(){
        for(const hunter of this.hunters){
            hunter.follow(this);
        }
    }
}