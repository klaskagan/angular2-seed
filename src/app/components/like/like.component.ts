import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLiked: boolean = false;
  @Input() likeCount: number = 0;

  likeClicked() {
    this.isLiked = !this.isLiked;
    this.likeCount += this.isLiked ? 1 : -1;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
