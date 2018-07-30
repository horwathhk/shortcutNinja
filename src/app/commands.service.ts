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
      name: 'Align Text Left',
      key: [17, 16, 76]
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
}


