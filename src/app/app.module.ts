import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CoursesComponent} from "./courses/courses.component";
import { AuthorsComponent } from './authors/authors.component';
import {AutoGrowDirective} from "./directives/auto-grow.directive";
import { StarComponent } from './components/star/star.component';
import { LikeComponent } from './components/like/like.component';
import { VotePollComponent } from './components/vote-poll/vote-poll.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
    StarComponent,
    LikeComponent,
    VotePollComponent,
    TweetComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
