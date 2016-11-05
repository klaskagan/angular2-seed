import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() heading: string;
  @Input() content: string;
  @Input() userName: string;
  @Input() likeCount: number;

  liked: boolean = false;

  constructor() {

  }

  ngOnInit() {
  }
}
