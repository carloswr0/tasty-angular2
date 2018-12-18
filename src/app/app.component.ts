import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';


  onNavigate(feature:string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB4GseGwNOVeX7UDdAiOSFjz48A4a3JZe8",
      authDomain: "tasty-cw.firebaseapp.com",
      databaseURL: "https://tasty-cw.firebaseio.com",
      projectId: "tasty-cw",
      storageBucket: "tasty-cw.appspot.com",
      messagingSenderId: "947226783145"
    });
  }
}
