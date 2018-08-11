import { Router } from '@angular/router';
import { CommandsService } from './../commands.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedServiceService } from '../shared-service.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  message: any = {};
  currentMessage: any;
  setting: any = {};
  savedMessageBool = false;


  constructor(
    private sharedData: SharedServiceService,
    private _commandServ: CommandsService,
    private _router: Router
  ) { }

  // ngOnInit() {
  //   this.sharedData.currentMessage.subscribe(message => this.message = message);
  // }

  // newMessage(settingsForm:NgForm): void{
  //   let library = settingsForm.value;
  //   this.sharedData.changeMessage(library);
  //   console.log("this is the library" + library);
  // }

  setSettings(settingsForm: NgForm): void {
    // this.setting = settingsForm.value.library;
    // this.sharedData.changeMessage(this.setting);
    console.log('from settings:', settingsForm.value);
    if (settingsForm.value.library === 'adobePhotoshop') {
      this._commandServ.setCurrentLibraryToPhotoshop();
    }
    if (settingsForm.value.library === 'microsoftExcel') {
      this._commandServ.setCurrentLibraryToExcel();
    }
    // console.log("this is from settings" + this.message);
    this.savedMessageBool = true;
    setTimeout( () => {
      this.switchToGameboard();
    }, 1200);
  }

  switchToGameboard() {
    this._router.navigateByUrl('/gameboard');
  }
}




