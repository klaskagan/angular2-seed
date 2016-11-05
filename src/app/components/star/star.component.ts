import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() isFavorite: boolean;
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  starClicked() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite})
  }

}
