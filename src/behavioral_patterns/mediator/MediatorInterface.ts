import {Component} from "./Component";

export interface MediatorInterface {
    notify(sender: Component, event: string): void
}