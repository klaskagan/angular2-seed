import {Component} from "@angular/core";
import {TweetService} from "./services/tweet.service";
import {Tweet} from "./components/tweet/Tweet";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TweetService]
})
export class AppComponent {
  isButtonActive: boolean = true;
  title = 'app works!';
  message = 'Welcome to Angular 2. Current time is: ';
  description = "First page";
  date = Observable.interval(1000).map(() => new Date());
  count: number = 0;

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

  tweets: Tweet[];

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
