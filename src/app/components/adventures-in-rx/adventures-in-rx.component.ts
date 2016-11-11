import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'adventures-in-rx',
  templateUrl: './adventures-in-rx.component.html',
  styleUrls: ['./adventures-in-rx.component.css']
})
export class AdventuresInRxComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      search: []
    });

    var search = this.form.get('search');
    search.valueChanges
      .debounceTime(400)
      .map(str => (<string> str).replace(' ', '-'))
      .subscribe(x => console.log(x));


    var startDates = [];
    var startDate = new Date();

    for (var day = -2; day <= 2; day++) {
      var date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + day
      );
      startDates.push(date);
    }

    // Observable.from(startDates)
    //   .map(date => {
    //     console.log("Getting deals for date " + date);
    //     return [1, 2, 3]; // Here, [1, 2, 3] simulates the flight deals returned from the server for the given date.
    //   })
    //   .subscribe(x => console.log(x));


    // var observable = Observable.interval(1000);
    // observable
    //   .flatMap(x => {
    //     console.log("calling the server to get the latest news");
    //     return Observable.of([1,2,3])
    //   })
    //   .subscribe(news => console.log(news));

    // var userStream = Observable.of({
    //   userId: 1, username: 'niko'
    // }).delay(2000);
    //
    // var tweetsStream = Observable.of([1, 2, 3]).delay(1500);
    //
    // Observable
    //   .forkJoin(userStream, tweetsStream)
    //   .map(joined => new Object({user: joined[0], tweets: joined[1]}))
    //   .subscribe(result => {
    //     console.log(result);
    //   });


    // var observable2 = Observable.throw(new Error("Something failed"));
    // observable2.subscribe(
    //   s => console.log(s),
    //   error => console.error(error)
    // );


    // var counter = 0;
    // var ajaxCall = Observable.of('url')
    //   .flatMap(() => {
    //     if (++counter < 2) {
    //       return Observable.throw(new Error('Request failed'));
    //     }
    //     return Observable.of([1, 2, 3]);
    //   });
    // ajaxCall
    //   .retry(3)
    //   .subscribe(
    //     success => console.log(success),
    //     error => console.error(error)
    //   );


    // var remoteDataStream = Observable.throw(new Error("Something failed"));
    //
    // remoteDataStream
    //   .catch(err => {
    //     var localDataStream = Observable.of([1, 2, 3]);
    //     return localDataStream;
    //   })
    //   .subscribe( x => console.log(x));


    // var remoteDataStream = Observable.of([1, 2, 3]).delay(5000);
    // remoteDataStream.timeout(1000).subscribe(
    //   s => console.log(s),
    //   err => console.error(err)
    // );


    let o1 = Observable.throw(new Error('error'));
    let o2 = Observable.from([1, 2, 3]);

    o1.subscribe(
      s => console.log(s),
      err => console.error(err),
      () => console.log("completed")
    );

    o2.subscribe(
      s => console.log(s),
      err => console.error(err),
      () => console.log("completed")
    );
  }

  ngOnInit() {
  }

}
