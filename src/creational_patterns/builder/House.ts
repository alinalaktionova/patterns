export class House {
  private doors: number;
  private walls: number;
  private roof: boolean;
  public setRoof(roof: boolean) {
      console.log( `I have ${roof} roof`);
      this.roof = roof
  }
  public setDoors(doors: number){
      console.log( `I have ${doors} doors`);
      this.doors = doors;
  }
  public setWalls(walls: number){
      console.log( `I have ${walls} walls`);
      this.walls = walls;
  }
}
