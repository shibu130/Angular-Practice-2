import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, combineLatest, concatMap, delay, delayWhen, endWith, exhaustMap, forkJoin, from, mergeMap, Observable, of, retry, retryWhen, startWith, Subject, Subscription, switchMap, take, takeUntil, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-rxjsplayground',
  standalone: false,
  templateUrl: './rxjsplayground.component.html',
  styleUrl: './rxjsplayground.component.css',
})
export class RXJSPlaygroundComponent implements OnInit,OnDestroy {


  subscription:Subscription;

  voidSubject:Subject<void> = new Subject<void>();

  subscriptionArray:Subscription[] = [];

  userList:Observable<any>;

  inputText:FormControl = new FormControl('init');
  

  constructor(private httpClient:HttpClient){


   


  }
  ngOnDestroy(): void {

    // array of subscription
    for(let i of this.subscriptionArray){
      i.unsubscribe();
    }

    // single subscription
    this.subscription.unsubscribe();

    // remove leak - listen until the subject is emitted
    this.voidSubject.next();
  }

  ngOnInit(): void {
    
    // -> https://www.youtube.com/watch?v=0NjhliVSuOM&list=PL7JmcZV0UQtVrhYmyvLM-VMz-zaZQMHj0&index=5 - refer for examples incase of doubt

    //this.subscription = this.getPosts().subscribe(e=>{});
    
    // listen only till the subject is not emitted
    //this.getPosts().pipe(takeUntil(this.voidSubject)).subscribe(e=>{})


    // how many times we can subscribe
    //this.getPosts().pipe(take(1)).subscribe(e=>{});



    // array of subscriptions
    //let sub = this.getPosts().subscribe(e=>{});

    //this.subscriptionArray.push(sub);


    // async pipe 

    //this.userList = this.getPosts();



    //* of - rxjs
    // emits for each value
    // array as one value
    // wraps a type as observable *//

    // of(1,2,4).subscribe(e=>{
    //   console.log(e);
    // }).unsubscribe();

    // array emitted as one value 

    // of([{a:1}, {b:1}]).subscribe(e=>{
    //   console.log(e);
    // }).unsubscribe()


    // from converts an iterable and things to observable

    // from([1,2,3]).subscribe(e=>{
    //   console.log(e);
    // }).unsubscribe();


    // fork join
    // api call 1 and api call 2 called individually => fork join combines multiple api calls
    // basically api one completes , api two completes then emits finally

    // forkJoin([this.getPosts(), this.getUsers()]).pipe(takeUntil(this.voidSubject)).subscribe(e=>{  
    //   console.log(e)
    // })


      // switch map
      // cancels the api calls inside if the above observable changes
      // this.inputText.valueChanges.pipe(switchMap(e=>this.httpClient.get('https://dummyjson.com/products/search?q=phone?q='+e))).subscribe(e=>

      // {
      //   console.log(e);
      // });


      // merge map
      // for all occurences the subscribe will fire

      //  this.inputText.valueChanges.pipe(mergeMap(e=>this.httpClient.get('https://dummyjson.com/products/search?q='+e))).subscribe(e=>

      // {
      //   console.log(e);
      // });

      // concat map
      // once the previous one is completed the next one is called

      //  this.inputText.valueChanges.pipe(concatMap(e=>this.httpClient.get('https://dummyjson.com/products/search?q='+e))).subscribe(e=>

      // {
      //   console.log(e);
      // });

      // exhaust map
      // if an observable call is going on then it wont run new until current one completes

      //  this.inputText.valueChanges.pipe(exhaustMap(e=>this.httpClient.get('https://dummyjson.com/products/search?q='+e))).subscribe(e=>

      // {
      //   console.log(e);
      // });


      // combine latest
      // waits until all observables emit atleast once

      // combineLatest([this.getPosts(), this.getUsers()]).subscribe(([input, posts]) => {
  
      // });

      // (flat map & mergemap are same) , tap , map , filter

      // tap - side effects -> observe data



      // map -> make changes to data 

      // filter -> make changes to data


      // ********* subjects and types ***********//


      // subject doesnt have initial value , if not subscribed in time we wont get last value
      // behaviour subject we can get the last value if not subscribed

      // if we subscribe immediately we will get value-current otherwise we will miss (hot observable- starts immediately wether )


      // sharereplay not init value , works when someone subscribes (cold observable)

      // shareplay doesnt have init value

      // similarity = both can give last value :)


      //rxjs revesion done except for few topics :)


    // ************ utilities ************/
      // start with

      // of(2, 3, 4).pipe(
      //   startWith(1)  // emit 1 first
      // ).subscribe(x => console.log(x));

      // end with

      // of(1, 2, 3).pipe(
      // endWith(4)  // emit 4 at the end
      // ).subscribe(x => console.log(x));

      // delay

      // preserves all value after x time
      // of(1, 2, 3).pipe(
      // delay(2000)  // emit each value 2 seconds later
      // ).subscribe(x => console.log(x));

      // debounce
      // once time ends last value is taken

      // throttle
      // emits first value
      // ignores others for certain amount of time

      // catch error

      // of(1, 2, 3).pipe(
      // // simulate error
      // mergeMap(x => x === 2 ? throwError(() => new Error('Oops')) : of(x)),
      // catchError(err => {
      //   console.log('Caught error:', err.message);
      //   return of(999); // recover with a default value
      // })
      // ).subscribe(value => console.log(value));


      // retry

      // of(1, 2).pipe(
      //   mergeMap(x => x === 2 ? throwError(() => new Error('Fail')) : of(x)),
      //   retry(2)  // try 2 more times
      // ).subscribe({
      //   next: val => console.log(val),
      //   error: err => console.log('Final error:', err.message)
      // });


      // retry when

      // let attempt = 0;

      // of('start').pipe(
      //   mergeMap(() => {
      //     attempt++;
      //     console.log('Attempt:', attempt);
      //     return attempt < 3 ? throwError(() => new Error('Fail')) : of('Success');
      //   }),
      //   retryWhen(errors =>
      //     errors.pipe(
      //       delayWhen(() => timer(1000)) // wait 1 second before retry
      //     )
      //   )
      // ).subscribe({
      //   next: val => console.log('Result:', val),
      //   error: err => console.log('Final error:', err.message)
      // });


    }

  inputChange(){


  }


  getUsers(){
    return this.httpClient.get("https://my-json-server.typicode.com/typicode/demo/comments");
  }

  getPosts(){

   return this.httpClient.get("https://my-json-server.typicode.com/typicode/demo/posts");
  }

  



}

