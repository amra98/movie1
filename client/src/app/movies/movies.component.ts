import { Component, OnInit } from '@angular/core';
// hapi 6
import { Router } from '@angular/router';
import { MoviesService } from 'services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
//hapi 6.1
export class MoviesComponent implements OnInit {

  constructor(private router:Router, private moviesService:MoviesService){}
//6.2
movies:any
  ngOnInit(): void {
   if(localStorage.getItem('isLogin') === null){
    this.router.navigateByUrl('/login')
   }
   //hapi 9
   this.moviesService.movies().pipe().subscribe((data)=>{
    console.log(data);
    this.movies = data
   },(err)=>{console.log(err);
   })

   
  }

}