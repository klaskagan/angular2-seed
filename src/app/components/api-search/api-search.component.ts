import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.css']
})
export class ApiSearchComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    let keyups = Observable.fromEvent(document.getElementById('search'), "keyup")
      .map(e => e.target.value)
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged();
    keyups.subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
