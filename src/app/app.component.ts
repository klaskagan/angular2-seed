import {Component} from '@angular/core';
import {TweetService} from "./services/tweet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TweetService]
})
export class AppComponent {
  isButtonActive: boolean = true;
  title = 'app works!';
  message = 'Angular 2 welcomes you on ';
  description = "First page";
  date: number = Date.now();
  count:number = 0;

  post = {
    title: "Title",
    isFavorite: true,
    voteCount: 10,
    myVote: 0
  };

  tweet = {
    totalLikes: 10,
    iLike: false
  };

  tweets: any[];

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }

  buttonOnClick($event) {
    $event.stopPropagation();
    console.log("mouse clicked", $event);
    this.count++;
  }

  divOnClick() {
    console.log("On div click");
  }

  onFavoriteChange($event) {
    console.log($event);
  }

  onVote($event) {
    console.log($event);
  }

}
