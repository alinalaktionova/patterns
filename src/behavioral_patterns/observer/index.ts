import {Rabbit} from "./Rabbit";
import {Hunter} from "./hunters/Hunter";
import {SecondHunter} from "./hunters/SecondHunter";

const rabbit = new Rabbit(13, 56);
const hunter1 = new Hunter();
const hunter2 = new SecondHunter();
hunter1.follow(rabbit);
hunter2.follow(rabbit);
rabbit.move(45,78);