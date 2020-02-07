import {Spammer} from "./Spammer";
import {FaceBook} from "./FaceBook";
import {Profile} from "./Profile";


const facebook = new FaceBook();
const profile1 = new Profile(23);
const profile2 = new Profile(73);
const profile3 = new Profile(29);
const profile4 = new Profile(83);

facebook.addProfile(profile1);
facebook.addProfile(profile3);
facebook.addProfile(profile4);
facebook.addProfile(profile2);
const spammer = new Spammer(facebook);
spammer.sendToCoworkers(profile1);
spammer.sendToFriends(profile3);