import { Injectable } from '@angular/core';

export class Message {
  public msg : string;
  public level : number;

  constructor(msg: string, level: number) {
    this.msg = msg;
    this.level = level;
  }
}

@Injectable()
export class MessageService {
  messages: Message[] = [];
 
  add(message: string) {
    this.messages.push(new Message(message, 1));
  }
  
  addLevel(message: string, level: number) {
    this.messages.push(new Message(message, level));
  }
 
  clear() {
    this.messages = [];
  }
  
  constructor() { }

}
