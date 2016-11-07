import {Component, OnInit, Inject} from '@angular/core';
import {AuthorsService} from "./authors.service";

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {

  title: string = "Authors";

  authors: string[];

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  ngOnInit() {
  }

}
