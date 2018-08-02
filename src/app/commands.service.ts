import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {
 name: string;
 key: number;

  constructor() { }

  photoShopCommands = [
    {
      name: 'one',
      key: [1]
    },
    {
      name: 'two',
      key: [50]
    },
    {
      name: 'three',
      key: [51]
    },
    {
      name: 'four',
      key: [52]
    },
    {
      name: 'five',
      key: [53]
    },
    {
      name: 'six',
      key: [54]
    }
  ];

  excelCommands = [
    {
      name: 'this is an xcel command press 1',
      key: [49]
    },
    {
      name: 'this is an xcel command press 2',
      key: [50]
    },
    {
      name: 'this is an xcel command press 3',
      key: [51]
    },
  ];
  // main guy
  commands = [
    {
      name: 'one',
      key: [1]
    },
    {
      name: 'two',
      key: [50]
    },
    {
      name: 'three',
      key: [51]
    },
    {
      name: 'four',
      key: [52]
    },
    {
      name: 'five',
      key: [53]
    },
    {
      name: 'six',
      key: [54]
    }
  ];


  getCommands(commandLibrary) {
    if (commandLibrary === 'photoshop') {
      this.commands = this.photoShopCommands;
    }
    if (commandLibrary === 'excel') {
      this.commands = this.excelCommands;
    }
  }

}


