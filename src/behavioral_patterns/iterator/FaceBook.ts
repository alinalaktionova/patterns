import {Profile} from "./Profile";
import {SocialNetworkInterface} from "./interfaces/SocialNetworkInterface";
import {ProfileIteratorInterface} from "./interfaces/ProfileIteratorInterface";
import {FaceBookIterator} from "./FaceBookIterator";

export class FaceBook implements SocialNetworkInterface{
    private profiles: Array<Profile> = [];
    public addProfile(profile: Profile){
        this.profiles.push(profile)
    }
    public createCoworkersIterator(profileId: number): ProfileIteratorInterface {
        return new FaceBookIterator(this, this.profiles, profileId, "coworkers")
    }
    public createFriendsIterator(profileId: number): ProfileIteratorInterface {
        return new FaceBookIterator(this, this.profiles, profileId, "friends")
    }
}