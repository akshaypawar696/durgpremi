import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }
  listArray = [
    {'id':0,'name':'Raigad'},
    {'id':1,'name':'Rajgad'},
    {'id':2,'name':'Sudhagad'},
    {'id':3,'name':'Sinhagad'},
    {'id':4,'name':'Lohgad'},
    {'id':5,'name':'Visapur'},
    {'id':6,'name':'Torna'},
    {'id':7,'name':'Purandar'},
    {'id':8,'name':'Tung'},
    {'id':9,'name':'Kalsubai'},
    ];

    trekInfo=[
      {'title':'Trek organization name : ','name':'Durgpremi trekker'},
      {'title':'Date : ','name':'28/07/2020'},
      {'title':'Start point : ','name':'Baner'},
      {'title':'Cost Per Person : ','name':'1000'},
      {'title':'Other Facilities : ','name':'Tea,Breakfast,Lunch'},
      {'title':'No. Of People : ','name':'20'}
    ]
  ngOnInit() {
    
  }

}
