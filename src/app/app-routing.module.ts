import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TrendingComponent } from './trending/trending.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'top-rated', component: TopRatedComponent },
    { path: 'upcoming', component: UpcomingComponent },
    { path: 'trending', component: TrendingComponent },
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
