import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: {
    value: string;
  };

  messages: string[] = [];

  constructor(private websocket: WebsocketService) {}

  ngOnInit() {
    this.message = { value: '' };
    this.websocket.message.subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  onSubmit() {
    console.log('message ===>', this.message);
    this.websocket.sendMessage(this.message.value);
  }

  get diagnostic() {
    return `message: ${JSON.stringify(this.message, null, 2)}`;
  }

}
