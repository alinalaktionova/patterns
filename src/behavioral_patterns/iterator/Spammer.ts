import {SocialNetworkInterface} from "./interfaces/SocialNetworkInterface";
import {Profile} from "./Profile";

export class Spammer{
    constructor(private network: SocialNetworkInterface){
        this.network = network
    }
    public sendToFriends(profile: Profile) {
        const iterator = this.network.createFriendsIterator(profile.getId());
        while(iterator.hasMore()){
            profile = iterator.getNext();
            console.log("Message to friends")
        }
    }
    public sendToCoworkers(profile: Profile) {
        const iterator = this.network.createCoworkersIterator(profile.getId());
        while(iterator.hasMore()){
            profile = iterator.getNext();
            console.log("Message to coworkers")
        }
    }
}