import { Component, OnInit } from '@angular/core';
//import router
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('isLogin') !== null){
      this.router.navigateByUrl('/movies')
    }
  }
  title = 'client';
}

