import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors() : string[] {
    return ["Author 1", "Author 2", "Author 3"];
  }



}
