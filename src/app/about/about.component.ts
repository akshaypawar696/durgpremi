import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  numberArray = [
    {'id':0,'name':'User count','count':100},
    {'id':1,'name':'Post count','count':200},
    {'id':2,'name':'Blog count','count':300},
    {'id':3,'name':'Visitor','count':400},
    ];

  constructor() { }

  ngOnInit() {
    console.log('Inside about');
  }

  
}