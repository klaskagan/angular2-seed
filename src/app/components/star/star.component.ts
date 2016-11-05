import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  clicked: boolean;

  constructor() { }

  ngOnInit() {
  }

  starClicked() {
    this.clicked = !this.clicked;
  }

}
