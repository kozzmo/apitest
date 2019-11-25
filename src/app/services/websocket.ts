import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  message = this.socket.fromEvent('message');

  constructor(private socket: Socket) {}

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }


}