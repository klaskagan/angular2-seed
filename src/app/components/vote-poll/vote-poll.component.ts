import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-vote-poll',
  templateUrl: './vote-poll.component.html',
  styleUrls: ['./vote-poll.component.css']
})
export class VotePollComponent implements OnInit {

  @Input() voteCount: number = 0;
  @Input() myVote: number = 0;

  @Output() vote: EventEmitter<any> = new EventEmitter();

  constructor() { }

  upVote() {
    if (this.myVote <= 0) {
      this.voteCount++;
      this.myVote++;
      this.vote.emit({myVote: this.myVote})
    }
  }

  downVote() {
    if (this.myVote >= 0) {
      this.voteCount--;
      this.myVote--;
      this.vote.emit({myVote: this.myVote})
    }
  }

  onVoteChange($event) {

  }

  ngOnInit() {
  }

}
