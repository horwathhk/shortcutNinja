import { Component, OnInit, HostListener } from '@angular/core';
import { CommandsService } from '../commands.service';
import {SharedServiceService} from '../shared-service.service';


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
 message: any;
 value = 0;
 name: string;
 names: any = [];
 successMessage:string;
 //showName: any;
 key: number;
 keys: any = [];
 showKey: any;
 command: any;
 shortcuts: any = [];
 showShortcut: any;
 rando: any;
 test_keys: any = [];
 //commandNames: any = [];
 excelCommands: any;
 help:boolean=false;
 answer:string;

 currentShortcut: any = {};
 playerReady = false;
 multiPressCounter = 0;
 success = false;
 failure = false;
 displayText=true;
 correctAnswer = 0;
 questionHistory = [];

 keydownMap = [];



 constructor(
   private _commandServ: CommandsService,
   //private _microsoftExcel: MicrosoftExcelService,
   private sharedData: SharedServiceService
   ) { }

   ngOnInit() {
    this.sharedData.currentMessage.subscribe(message => this.message = message);
   }

@HostListener('window:keydown', ['$event'])

@HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    console.log("The event", event);
    if (!this.playerReady) {
      this.getRandomCommand();
      console.log("get random fired and this is the messge:"+ this.message);
      this.startNextQuestion();

      //shan
      // this.message = 'adobePhotoshop';
      // this.startNextQuestion();
    } else if (this.isShortcutOnlyOneKey(this.currentShortcut)) {
      if (event.keyCode === this.currentShortcut.key[0]) {
        console.log('User pressed ' + event.keyCode);
        console.log('Tot lam!');
        this.showSuccessMessage();
        this.addToCorrectScoreCounter();
        this.startNextQuestion();
      } else {
        console.log('User pressed ' + event.keyCode + ' which is incorrect');
        console.log('USTED NO BUENO');
        this.showFailureMessage();
        this.startNextQuestion();
      }
    } else if (this.isShortcutMultipleKeys(this.currentShortcut)) {
      const shortcutLen = this.currentShortcut.key.length;
      // add to the keydown map
      if(event.type == "keydown" && this.keydownMap[this.keydownMap.length-1] !== event.keyCode) {
        this.keydownMap.push(event.keyCode);
      }
      console.log("The Keydown Map:", this.keydownMap);
      // check if the keydown map has all the needed keys
      if (this.keydownMap.length === shortcutLen && event.type === "keyup") {

        this.evaluateAnswer();
        
      }


      // // multiPressCounter starts as 0
      // if (event.keyCode === this.currentShortcut.key[this.multiPressCounter]) {
      //   console.log('Correct-ish...User pressed ' + event.keyCode);
      //   // successful first key
      // } else {
      //   this.showFailureMessage();
      //   console.log('User pressed ' + event.keyCode + ' which is incorrect');
      // }
      // if (shortcutLen === (this.multiPressCounter + 1)) {
      //   console.log('Tot lam!');
      //   if (event.keyCode === this.currentShortcut.key[this.multiPressCounter]) {
      //     console.log('YOU WIN...User pressed ' + event.keyCode);
      //     this.showSuccessMessage();
      //     this.addToCorrectScoreCounter();
      //     // you actually did it
      //     this.startNextQuestion();
      //   } else {
      //     console.log('User pressed ' + event.keyCode + ' which is incorrect');
      //     this.showFailureMessage();
      //     this.startNextQuestion();
      //   }
      // }
      // ++this.multiPressCounter;
    }
    this.playerReady = true;
  }

  isShortcutOnlyOneKey(shortcut) {
    // shortcuts have a key and name properties
    return (shortcut.key.length === 1);
  }
  isShortcutMultipleKeys(shortcut) {
    // shortcuts have a key and name properties
    return (shortcut.key.length > 1);
  }
  isKeydownMapCorrect(kdm, cs) {
    // kdm = keydownMap, cs = currentShortcut
    let correctCheck = true;
    for(var i=0; i<kdm.length; i++) {
      let currentKeydown = kdm[i];
      let currentShortcutKey = cs.key[i];
      if(currentKeydown !== currentShortcutKey) {
        correctCheck = false;
        break;
      }
    }
    console.log("Keydown map was " + correctCheck);
    return correctCheck;
  }

  clearTheKeydownMap() {
    this.keydownMap = [];
  }

  evaluateAnswer() {
    if(this.isKeydownMapCorrect(this.keydownMap, this.currentShortcut)) {
      this.clearTheKeydownMap();
      this.showSuccessMessage();
      this.addToCorrectScoreCounter();
      this.startNextQuestion();
    } else {
      this.showFailureMessage();
      this.clearTheKeydownMap();
      this.startNextQuestion();
    }
  }

  showSuccessMessage() {
    this.success = true;
    this.displayText = false;
    setTimeout(() => {
      this.success = false;
      this.displayText = true;
    }, 1500);
  }

  showFailureMessage() {
    this.failure = true;
    this.displayText = false;
    setTimeout(() => {
      this.failure = false;
      this.displayText = true;
    }, 1500);
  }



  startNextQuestion() {
    this.currentShortcut = this.getRandomCommand();
    console.log('Current Shortcut: ');
    console.log(this.currentShortcut);
    let dupeCheck = false;
    if (this.questionHistory.length > 2) {
      for (let i = this.questionHistory.length - 2; i < this.questionHistory.length; i++) {
        const currentCommandInLoop = this.questionHistory[i];
        if (currentCommandInLoop.name === this.currentShortcut.name) {
          dupeCheck = true;
          console.log('Found a dupe!');
          this.startNextQuestion();
          break;
        }
      }
    }
    if (dupeCheck === false) {
      this.questionHistory.push(this.currentShortcut);
    }
  }

  getRandomCommand() {
    if (this.message === 'adobePhotoshop') {
      const rando = Math.floor(Math.random() * this._commandServ.photoShopCommands.length);
      console.log('Current Shortcut: ' + this.currentShortcut.command);
      return this._commandServ.photoShopCommands[rando];
    } else if (this.message === 'microsoftExcel') {
        const rando = Math.floor(Math.random() * this._commandServ.excelCommands.length);
        console.log('Current Shortcut: ' + this.currentShortcut.command);
        return this._commandServ.excelCommands[rando];
    }
    }
    
    
    
    
    // const rando = Math.floor(Math.random() * this._commandServ.commands.length);
    //   console.log('Current Shortcut: ' + this._commandServ.commands[rando].name);
    //   return this._commandServ.commands[rando];
    

  addToCorrectScoreCounter() {
    this.correctAnswer++;
  }

  helper(){
    this.help = true;
      setTimeout(() => {
        this.help = false;
      }, 800);
    }
    
  
} // end of class

