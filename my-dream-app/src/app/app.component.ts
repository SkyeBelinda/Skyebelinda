import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Amazing App';
  username = '';
  displayCondition = false;
  elementArray = 0;
  arrayNumbers = [];

onDisplay() {
  this.displayCondition = !this.displayCondition;
  this.elementArray += 1;
  this.arrayNumbers.push(this.elementArray);
}

getColor(p) {
  return this.arrayNumbers.indexOf(p) >= 4 ? 'blue' : 'white';
  // because first element in array is 0
}
}


