import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  starClicked() {
    this.isFavorite = !this.isFavorite;
  }

}
