export class TreeType {
    constructor(public name: string, public color: string, public texture: string){
        this.color = color;
        this.name = name;
        this.texture = texture;
    }

    public draw(x: number, y: number) {
        console.log( `My name is ${this.name}, color: ${this.color} and texture: ${this.texture}.I am drawing x: ${x}, y: ${y}`)
    }
}