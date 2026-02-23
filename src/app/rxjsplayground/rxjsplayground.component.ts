import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin, from, Observable, of, Subject, Subscription, switchMap, take, takeUntil } from 'rxjs';

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
    // api call 1 and api call 2 => fork join combines multiple api calls
    // basically api one completes , api two completes then emits finally

    // forkJoin([this.getPosts(), this.getUsers()]).pipe(takeUntil(this.voidSubject)).subscribe(e=>{  
    //   console.log(e)
    // })


      // switch map
      // cancels the api calls inside if the above observable changes
      this.inputText.valueChanges.pipe(switchMap(e=>this.httpClient.get('https://dummyjson.com/products/search?q=phone?q='+e))).subscribe(e=>

      {
        console.log(e);
      });

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

