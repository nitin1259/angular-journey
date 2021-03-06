import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // behave simalar to css atribute property
  // selector: '.app-servers', // this behaves simalar to css class property
  selector: 'app-servers', // recommended one
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  // template: `<app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  // styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created yet';
  serverName = 'Testserver-0';
  isServerCreated = false;
  servers = ['Testserver-1', 'Testserver-2', 'Testserver-3'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server has been created. Name is ' + this.serverName + '!!!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
