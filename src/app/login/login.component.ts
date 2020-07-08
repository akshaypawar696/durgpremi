import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageIndex = 1;
  constructor() { }

  ngOnInit() {
    console.log('Inside login');

  }

  changePage(){
    if(this.pageIndex == 1)
      this.pageIndex = 2;
    else
      this.pageIndex = 1;
    console.log(this.pageIndex)
  }
  
}
