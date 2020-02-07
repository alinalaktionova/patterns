import {ProfileIteratorInterface} from "./interfaces/ProfileIteratorInterface";
import {FaceBook} from "./FaceBook";
import {Profile} from "./Profile";

export class FaceBookIterator implements ProfileIteratorInterface {
    private currentPosition: number = 0;
    constructor(private facebook: FaceBook,  private profiles: Array<Profile>, private profileId: number, private type: string){
        this.type = type;
        this.facebook = facebook;
        this.profileId = profileId;
        this.profiles = profiles;
    }
    public getNext(): Profile {
        if(this.hasMore()){
            this.currentPosition++;
            return this.profiles[this.currentPosition]
        }
    }

    public hasMore(): boolean {
        return this.profiles.length > this.currentPosition
    }
}