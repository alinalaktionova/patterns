export class Profile {
    constructor(private id: number) {
        this.id = id;
    }

    public getId() {
        return this.id
    }
}