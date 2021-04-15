import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermgmt',
  templateUrl: './usermgmt.component.html',
  styleUrls: ['./usermgmt.component.css'],
})
export class UsermgmtComponent implements OnInit {
  userName = '';
  isEnabled = false;
  constructor() {}

  ngOnInit(): void {}

  onChangeUserName(event: Event) {
    if (this.userName && this.userName.trim().length > 0) this.isEnabled = true;
    else this.isEnabled = false;
  }

  onButtonClick() {
    this.userName = '';
    this.isEnabled = false;
  }
}
