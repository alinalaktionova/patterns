import {ProfileIteratorInterface} from "./ProfileIteratorInterface";

export interface SocialNetworkInterface {
    createFriendsIterator(profileId: number): ProfileIteratorInterface
    createCoworkersIterator(profileId: number): ProfileIteratorInterface
}