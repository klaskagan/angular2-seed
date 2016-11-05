import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isButtonActive: boolean = true;
  title = 'app works!!!';
  message = 'Angular 2 welcomes you on ';
  description = "First page";
  date: number = Date.now();

}
