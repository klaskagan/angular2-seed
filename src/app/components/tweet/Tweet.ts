export class Tweet {

  heading: string;
  content: string;
  userName: string;
  likeCount: number;

  constructor(heading: string, content: string, userName: string, likeCount: number) {
    this.heading = heading;
    this.content = content;
    this.userName = userName;
    this.likeCount = likeCount;
  }
}
