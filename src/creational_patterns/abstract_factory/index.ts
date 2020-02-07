import {AppleFactory} from "./factory/AppleFactory";
import {SamsungFactory} from "./factory/SamsungFactory";

const myAppleFactory = new AppleFactory();
myAppleFactory.createPhone().call();
myAppleFactory.createDesktop().play();

const mySamsungFactory = new SamsungFactory();
mySamsungFactory.createPhone().call();
mySamsungFactory.createDesktop().play();