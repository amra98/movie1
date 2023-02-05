import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashborardComponent } from './dashborard/dashborard.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

//hapi 1 krijimi i rootave per login dashboard fhe movies
const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'movies',component:MoviesComponent},
  {path:'dashboard',component:DashborardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
