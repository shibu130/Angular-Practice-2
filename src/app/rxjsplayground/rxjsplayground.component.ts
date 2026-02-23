import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';

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






  }

  getPosts(){

   return this.httpClient.get("https://my-json-server.typicode.com/typicode/demo/posts");
  }

  



}

