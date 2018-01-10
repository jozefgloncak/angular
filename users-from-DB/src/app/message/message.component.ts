import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
 
@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 
  @Input()
  wrapLines = false;

  constructor(public messageService: MessageService) {}
 
  ngOnInit() {
  }
 
}
