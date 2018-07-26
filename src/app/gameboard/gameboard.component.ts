import { Component, OnInit,HostListener } from '@angular/core';
import { CommandsService } from "../commands.service";


export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent {
 value:number= 0;
 name:string;
 names:any=[]=[];
 showName:any;
 key:number;
 keys:any=[]=[];
 showKey:any;
 command:any;
 shortcuts:any=[]=[];
 showShortcut:any;
 rando:any;
 test_keys:any=[];
 commandNames:any=[];

 currentShortcut:any={};
 q:any =[];
 playerReady:boolean = false;
 multiPressCounter:number = 0;
 success:boolean = false;
 failure:boolean = false;
 correctAnswer:number=0;


 constructor(private _commandServ:CommandsService ) { }
 ngOnInit() {
    
// Gets random x, y values based on the size of the container
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];

}//end of ngOnInit

@HostListener('window:keydown', ['$event'])
@HostListener('window:keydown', ['$event'])

  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if(!this.playerReady){
      this.currentShortcut = this.getRandomCommand();
      this.q.push(true);
    } else if(this.currentShortcut.key.length==1){
      if (event.keyCode === this.currentShortcut.key[0]) {
        console.log("User pressed " + event.keyCode);
        console.log("Tot lam!");
        this.showSuccessMessage();
        this.score();
        this.startNextQuestion();
      } else {
        console.log("User pressed " + event.keyCode + " which is incorrect");
        console.log("USTED NO BUENO");
        this.showFailureMessage();
        this.startNextQuestion()
      }
    } else if (this.currentShortcut.key.length>1) {
      let shortcutLen = this.currentShortcut.key.length
      if (event.keyCode === this.currentShortcut.key[this.multiPressCounter]) {
        console.log("Correct-ish...User pressed " + event.keyCode);
        // successful first key
      } else {
        this.showFailureMessage();
        console.log("User pressed " + event.keyCode + " which is incorrect");
      }
      if(shortcutLen === (this.multiPressCounter + 1)){
        console.log("Tot lam!");
        if (event.keyCode === this.currentShortcut.key[this.multiPressCounter]) {
          console.log("YOU WIN...User pressed " + event.keyCode);
          this.showSuccessMessage();
          this.score();
          // you actually did it
          this.startNextQuestion();
        } else {
          console.log("User pressed " + event.keyCode + " which is incorrect");
          this.showFailureMessage();
          this.startNextQuestion();
        }
      }
      ++this.multiPressCounter;
    }
    this.playerReady = true;
  }

    showSuccessMessage(){
    this.success = true;
    setTimeout(()=>{
      this.success = false;
    }, 1500)
  }

  showFailureMessage(){
    this.failure = true;
    setTimeout(()=>{
      this.failure = false;
    }, 1500)
  }
  
  startNextQuestion(){
    this.q[(this.q.length-1)] = null;
    this.q.push(true);
    this.currentShortcut = this.getRandomCommand();
  }

  getRandomCommand(){  
    let rando = Math.floor(Math.random() * this._commandServ.commands.length); 
    console.log("Current Shortcut: " + this.currentShortcut.command);
    return this._commandServ.commands[rando];
    // this.showShortcut = this.shortcuts[randomIndex];
    // console.log(this.showShortcut);
  }

  score(){
    this.correctAnswer++;
  }

}//end of class

