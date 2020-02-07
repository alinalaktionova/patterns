import {Notifier} from "./Notifier/Notifier";
import {FaceBookDecorator} from "./Decorators/FaceBookDecorator";
import {EmailDecorator} from "./Decorators/EmailDecorator";

let notifier = new Notifier();
notifier.send("hello");
notifier = new FaceBookDecorator(notifier);
notifier.send("how are you?");
notifier = new EmailDecorator(notifier);
notifier.send("by");
