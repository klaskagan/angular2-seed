import {Injectable} from '@angular/core';
import {Tweet} from "../components/tweet/Tweet";

@Injectable()
export class TweetService {

  tweets: Tweet[];

  constructor() {
    var tweet1 = new Tweet("ARSTOT","Come on you gunners!","klaskagan", 30);
    var tweet2 = new Tweet("TRUMP is a giant duche", "You all f*!kers will shit your pants!", "skankhunt42", 0);
    var tweet3 = new Tweet("AngularJS News", "This framework looks awesome. You can create custom pipes. The transform method is essential to a pipe. The PipeTransform interface defines that method and guides both tooling and the compiler. It is technically optional; Angular looks for and executes the transform method regardless.", "rp33", 4);
    this.tweets = [tweet1, tweet2, tweet3];
  }

  getTweets() : Tweet[] {
    return this.tweets;
  }

}
