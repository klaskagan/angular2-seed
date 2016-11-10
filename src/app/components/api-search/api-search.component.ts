import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Observable} from "rxjs";
import {SpotifyService} from "../../services/spotify.service";
declare var $: any;

@Component({
  selector: 'api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.css'],
  providers: [SpotifyService]
})
export class ApiSearchComponent implements OnInit, AfterViewInit {

  spotifyService: SpotifyService;

  constructor(spotifyService: SpotifyService) {
    this.spotifyService = spotifyService;
  }

  ngAfterViewInit() {
    let keyups = Observable.fromEvent(document.getElementById('search'), "keyup")
      .map(e => e.target.value)
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(e => this.spotifyService.searchArtists(e));

    keyups.subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
