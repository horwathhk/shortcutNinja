import { Component, OnInit, HostListener } from '@angular/core';
import { CommandsService } from '../commands.service';
import { MicrosoftExcelService } from '../microsoft-excel.service';
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

 currentShortcut: any = {};
 q: any = []; // questions that have been displayed to the user
 playerReady = false;
 multiPressCounter = 0;
 success = false;
 failure = false;
 correctAnswer = 0;


 constructor(
   private _commandServ: CommandsService, private _microsoftExcel: MicrosoftExcelService, private sharedData: SharedServiceService
   ) { }

   ngOnInit() {
    this.sharedData.currentMessage.subscribe(message => this.message = message);
   }

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
  }

  getRandomCommand() {
    if (this.message === 'adobePhotoshop') {
      const rando = Math.floor(Math.random() * this._commandServ.commands.length);
      console.log('Current Shortcut: ' + this.currentShortcut.command);
      return this._commandServ.commands[rando];
    } else if (this.message === 'microsoftExcel') {
        const rando = Math.floor(Math.random() * this._microsoftExcel.commands.length);
        console.log('Current Shortcut: ' + this.currentShortcut.command);
        return this._microsoftExcel.commands[rando];
    }
    }

  score() {
    this.correctAnswer++;
  }

} // end of class

