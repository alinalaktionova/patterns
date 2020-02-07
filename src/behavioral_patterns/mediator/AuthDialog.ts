import {MediatorInterface} from "./MediatorInterface";
import {Button} from "./Button";
import {CheckBox} from "./CheckBox";
import {TextBox} from "./TextBox";
import {Component} from "./Component";

export class AuthDialog implements MediatorInterface {
    public okBtn: Button;
    public email: TextBox;
    public acceptCheckbox: CheckBox;
    constructor(){
        this.okBtn = new Button(this);
        this.email = new TextBox(this);
        this.acceptCheckbox = new CheckBox(this);
    }
    public notify(sender: Component, event: string): void {
        if(sender == this.acceptCheckbox && event == "check"){
        console.log("Accept")
    }
    if(sender == this.okBtn && event == "click"){
        console.log("Submit")
    }
    if(sender == this.email && event == "key press"){
        console.log("Typing email...")
    }

}

}