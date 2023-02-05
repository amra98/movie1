import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//hapi 5 
export class LoginComponent implements  OnInit{


//hapi 7
  constructor(private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('isLogin') !== null){
      this.router.navigateByUrl('/movies')
     }
  }
username:string =''
password:string=''
//hapi 5.4
login(){
  if(this.username.length !== 0 && this.password.length !== 0){
    console.log("done!");
    this.router.navigateByUrl('/movies')
      localStorage.setItem('isLogin', 'true')
    
  }
}
}

