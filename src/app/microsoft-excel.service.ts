import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicrosoftExcelService {

  constructor() { }

  excelCommands = [
    {
      name:"this is an xcel command press 1", 
      key:[1]
    }, 
    {
      name:"this is an xcel command press 2", 
      key:[2]
    }, 
    {
      name:"this is an xcel command press 3", 
      key:[3]
    },
  ]
}
