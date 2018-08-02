import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedServiceService } from "../shared-service.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  message:any={};
  currentMessage:any;
  setting:any={};

  constructor(private sharedData: SharedServiceService) { }

  ngOnInit() {
    this.sharedData.currentMessage.subscribe(message =>this.message = message)
  }

  // newMessage(settingsForm:NgForm): void{
  //   let library = settingsForm.value;
  //   this.sharedData.changeMessage(library);
  //   console.log("this is the library" + library);
    
  // }

  setSettings(settingsForm:NgForm):void{
    this.setting = settingsForm.value.library;
    this.sharedData.changeMessage(this.setting);
    console.log("from settings" + this.setting);
    //console.log("this is from settings" + this.message);
  }
}




