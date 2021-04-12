import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onFiredInterval(input: number) {
    // console.log('incoming fired input: ' + input);

    if (input % 2 === 0) {
      this.evenNumbers.push(input);
    } else {
      this.oddNumbers.push(input);
    }
  }
}
