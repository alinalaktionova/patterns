import {Navigator} from "./Navigator";
import {RoadStrategy} from "./strategies/RoadStrategy";
import {WalkStrategy} from "./strategies/WalkStrategy";
import {PublicTransportStrategy} from "./strategies/PublicTransportStrategy";

const navigator = new Navigator();
navigator.setStrategy(new RoadStrategy());
navigator.buildRoute();
navigator.setStrategy(new WalkStrategy());
navigator.buildRoute();
navigator.setStrategy(new PublicTransportStrategy());
navigator.buildRoute();