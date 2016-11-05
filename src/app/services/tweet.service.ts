import {Injectable} from '@angular/core';

@Injectable()
export class TweetService {

  tweets: [{}];

  constructor() {
    this.tweets = [
      {
        heading: "ARSTOT",
        content: "Come on you gunners!",
        userName: "klaskagan",
        likeCount: 30
      },
      {
        heading: "TRUMP is a giant duche",
        content: "You all f*!kers will shit your pants!",
        userName: "skankhunt42",
        likeCount: -9
      },
      {
        heading: "AngularJS 2",
        content: "This framework looks awesome",
        userName: "rp33",
        likeCount: 4
      }];
  }

  getTweets() {
    return this.tweets;
  }

}
