import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {
 name: string;
 key: number;
 answer:string;

 

  constructor() { }

  photoShopCommands =  [
    {
      name: 'Intersect with a selection',
      key: [16, 18],
      answer:"Shift-Alt"
    },
    {
      name: 'Hide/Show all panels except Tools panel and Options bar',
      key: [16, 9],
      answer:"Shift-Tab"
    },
    {
      name: 'Scroll image left in window',
      key: [17, 16, 38],
      answer:"Ctrl–Shift–PageUp"
    },
    {
      name: 'Fill selection with Background color',
      key: [17, 8],
      answer:"Ctrl–Backspace"
    },
    {
      name: 'Fill selection with source state in History panel',
      key: [17, 18, 8],
      answer: "Ctrl–Alt–Backspace"

    },
    {
      name: 'Decrease/Increase hardness of brush',
      key: [16, 189],
      answer:"Shift –"
    },
    {
      name: 'Undo or Redo operations beyond last one',
      key: [17, 18, 90],
      answer:"Ctrl–Alt–Z"
    },
  ];
  

  excelCommands =
  [
    {
      name: 'one excel comamnds',
      key: [1],
      
    },
    {
      name: 'two excel commands',
      key: [50]
    },
    {
      name: 'three excel commands',
      key: [51]
    },
    {
      name: 'four excel commands',
      key: [52]
    },
    {
      name: 'five excel commands',
      key: [53]
    },
    {
      name: 'six excel commands',
      key: [54]
    }
  ];
  // getCommands(commandLibrary) {
  //   if (commandLibrary === 'photoshop') {
  //     this.commands = this.photoShopCommands;
  //   }
  //   if (commandLibrary === 'excel') {
  //     this.commands = this.excelCommands;
  //   }
  // }

}


