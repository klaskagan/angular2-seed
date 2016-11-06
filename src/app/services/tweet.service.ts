import {Injectable} from '@angular/core';
import {Tweet} from "../components/tweet/Tweet";

@Injectable()
export class TweetService {

  tweets: Tweet[];

  constructor() {
    var tweet1 = new Tweet("ARSTOT","Come on you gunners!","klaskagan", 30);
    var tweet2 = new Tweet("TRUMP is a giant duche", "You all f*!kers will shit your pants!", "skankhunt42", 0);
    var tweet3 = new Tweet("AngularJS News", "This framework looks awesome", "rp33", 4);
    this.tweets = [tweet1, tweet2, tweet3];
  }

  getTweets() : Tweet[] {
    return this.tweets;
  }

}
