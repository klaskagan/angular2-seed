import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CoursesComponent} from "./components/courses/courses.component";
import { AuthorsComponent } from './components/authors/authors.component';
import {AutoGrowDirective} from "./directives/auto-grow.directive";
import { StarComponent } from './components/star/star.component';
import { LikeComponent } from './components/like/like.component';
import { VotePollComponent } from './components/vote-poll/vote-poll.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { BootstrapPanelComponent } from './components/bootstrap-panel/bootstrap-panel.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import {SignUpFormComponent} from "./components/signup-form/signup-form.component";
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';

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
    SummaryPipe,
    BootstrapPanelComponent,
    ZippyComponent,
    ContactFormComponent,
    SubscriptionFormComponent,
    SignUpFormComponent,
    ChangePasswordFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
