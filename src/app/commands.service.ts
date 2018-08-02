import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {
 name: string;
 key: number;

  constructor() { }

  commands = [
    {
<<<<<<< HEAD
      name:"one", 
      key:[1]
    }, 
=======
      name: 'Align Text Left',
      key: [17, 16, 76]
    },
>>>>>>> 33993e667e18a25a4a3cd22f3b8026eaac00ff59
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
}


