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
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server has been created!!!';
  }
}
