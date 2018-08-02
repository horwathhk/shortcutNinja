import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicrosoftExcelService {
  name:string;
  key:number;
  constructor() { }

  commands = [
    {
      name:"this is an xcel command press 1", 
      key:[49]
    }, 
    {
      name:"this is an xcel command press 2", 
      key:[50]
    }, 
    {
      name:"this is an xcel command press 3", 
      key:[51]
    },
  ]
}
