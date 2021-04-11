import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None, // default is Emulate, and other is Native
})
export class ServerElementComponent implements OnInit {
  @Input('serElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
