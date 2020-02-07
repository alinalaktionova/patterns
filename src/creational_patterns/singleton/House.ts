export class House {
  private static house: House;
  public hello() {
      console.log("Hello, I`m here")
  }
  public static getHouse() {
    if (House.house == null) {
      House.house = new House();
    }
    return House.house;
  }
}
