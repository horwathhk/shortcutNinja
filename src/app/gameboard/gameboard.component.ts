<<<<<<< HEAD
import { Component, OnInit,HostListener } from '@angular/core';
import { CommandsService } from "../commands.service";
import { MicrosoftExcelService } from "../microsoft-excel.service";
import { SharedServiceService } from "../shared-service.service";
//https://www.youtube.com/watch?v=I317BhehZKM&t=105s
=======
import { Component, OnInit, HostListener } from '@angular/core';
import { CommandsService } from '../commands.service';
import { MicrosoftExcelService } from '../microsoft-excel.service';
import { ChangeDetectorRef } from '@angular/core';

>>>>>>> 33993e667e18a25a4a3cd22f3b8026eaac00ff59

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
<<<<<<< HEAD
 message:any={};


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
 excelCommands:any;

 currentShortcut:any={};
 q:any =[];
 playerReady:boolean = false;
 multiPressCounter:number = 0;
 success:boolean = false;
 failure:boolean = false;
 correctAnswer:number=0;


 constructor(private _commandServ:CommandsService, private _microsoftExcel:MicrosoftExcelService,  private sharedData: SharedServiceService ) { }
 
 ngOnInit() {
  this.sharedData.currentMessage.subscribe(message =>this.message = message)
  console.log("from gameboard" + this.message);
  
  
// Gets random x, y values based on the size of the container
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];

}//end of ngOnInit
=======
 value = 0;
 name: string;
 names: any = [];
 showName: any;
 key: number;
 keys: any = [];
 showKey: any;
 command: any;
 shortcuts: any = [];
 showShortcut: any;
 rando: any;
 test_keys: any = [];
 commandNames: any = [];
 excelCommands: any;
>>>>>>> 33993e667e18a25a4a3cd22f3b8026eaac00ff59

 currentShortcut: any = {};
 q: any = []; // questions that have been displayed to the user
 playerReady = false;
 multiPressCounter = 0;
 success = false;
 failure = false;
 correctAnswer = 0;


 constructor(
   private _commandServ: CommandsService,
   private _changeDet: ChangeDetectorRef
   ) { }
//   ngOnInit() {
//   // Gets random x, y values based on the size of the container
//     let y = window.innerWidth;
//     let x = window.innerHeight;
//     let randomX: number = Math.floor(Math.random() * x);
//     let randomY: number = Math.floor(Math.random() * y);
//     return [randomX, randomY];

// } // end of ngOnInit

// @HostListener('window:keydown', ['$event'])
@HostListener('window:keydown', ['$event'])

  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (!this.playerReady) {
      this.currentShortcut = this.getRandomCommand();
      this.q.push(true);
    } else if (this.currentShortcut.key.length === 1) {
      if (event.keyCode === this.currentShortcut.key[0]) {
        console.log('User pressed ' + event.keyCode);
        console.log('Tot lam!');
        this.showSuccessMessage();
        this.score();
        this.startNextQuestion();
      } else {
        console.log('User pressed ' + event.keyCode + ' which is incorrect');
        console.log('USTED NO BUENO');
        this.showFailureMessage();
        this.startNextQuestion();
      }
    } else if (this.currentShortcut.key.length > 1) {
      const shortcutLen = this.currentShortcut.key.length;
      // multiPressCounter starts as 0
      if (event.keyCode === this.currentShortcut.key[this.multiPressCounter]) {
        console.log('Correct-ish...User pressed ' + event.keyCode);
        // successful first key
      } else {
        this.showFailureMessage();
        console.log('User pressed ' + event.keyCode + ' which is incorrect');
      }
      if (shortcutLen === (this.multiPressCounter + 1)) {
        console.log('Tot lam!');
        if (event.keyCode === this.currentShortcut.key[this.multiPressCounter]) {
          console.log('YOU WIN...User pressed ' + event.keyCode);
          this.showSuccessMessage();
          this.score();
          // you actually did it
          this.startNextQuestion();
        } else {
          console.log('User pressed ' + event.keyCode + ' which is incorrect');
          this.showFailureMessage();
          this.startNextQuestion();
        }
      }
      ++this.multiPressCounter;
    }
    this.playerReady = true;
    this._changeDet.detectChanges();
  }

    showSuccessMessage() {
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 1500);
  }

  showFailureMessage() {
    this.failure = true;
    setTimeout(() => {
      this.failure = false;
    }, 1500);
  }

  justInCase() {
    setTimeout(() => {
    this._changeDet.detectChanges();
    }, 1500);
  }

  startNextQuestion() {
    console.log('q array that user has seen');
    console.log(this.q);
    this.q[(this.q.length - 1)] = null;
    this.q.push(true);
    this.currentShortcut = this.getRandomCommand();
    console.log('Current Shortcut: ' + this.currentShortcut.key);
    console.log('q array after startNextQuestion()');
    console.log(this.q);
    // this._changeDet.detectChanges();
    this.justInCase();
  }

<<<<<<< HEAD
  getRandomCommand(){
    if(this.message == "adobePhotoshop"){  
      let rando = Math.floor(Math.random() * this._commandServ.commands.length); 
      console.log("Current Shortcut: " + this.currentShortcut.command);
      return this._commandServ.commands[rando];
    } else if(this.message == "microsoftExcel"){
        let rando = Math.floor(Math.random() * this._microsoftExcel.commands.length); 
        console.log("Current Shortcut: " + this.currentShortcut.command);
        return this._microsoftExcel.commands[rando];
    }
    }
=======
  getRandomCommand() {
    const rando = Math.floor(Math.random() * this._commandServ.commands.length);
    console.log('Random number is: ' + rando);
    return this._commandServ.commands[rando];
  }
>>>>>>> 33993e667e18a25a4a3cd22f3b8026eaac00ff59

  score() {
    this.correctAnswer++;
  }

<<<<<<< HEAD
 

}//end of class
=======
} // end of class
>>>>>>> 33993e667e18a25a4a3cd22f3b8026eaac00ff59

