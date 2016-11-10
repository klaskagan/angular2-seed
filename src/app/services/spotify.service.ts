import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
declare var $: any;

@Injectable()
export class SpotifyService {

  constructor() {
  }

  searchArtists(searchTerm: string): any {
    var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
    var promise = $.getJSON(url);
    return Observable.fromPromise(promise);
  }

}
