import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dashborard',
  templateUrl: './dashborard.component.html',
  styleUrls: ['./dashborard.component.css']
})
export class DashborardComponent implements OnInit {

  constructor(private router:Router){}

  isLoggedIn =false
  buttonText = ''
  ngOnInit(): void {
    this.isLoggedIn=localStorage.getItem('isLogin') !== null? true :false
    if(this.isLoggedIn){
      this.buttonText = 'Log Out'
    }else{
      this.buttonText = 'Log In'
    }
  }  

  login(){
    if(this.isLoggedIn){
      localStorage.clear()
    }
    this.router.navigateByUrl('/login')
  }

}
