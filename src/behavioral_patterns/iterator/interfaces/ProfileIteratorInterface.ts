import {Profile} from "../Profile";

export interface ProfileIteratorInterface {
        getNext(): Profile
        hasMore(): boolean
}