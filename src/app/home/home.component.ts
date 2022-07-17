import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { MoviesService } from './../movies.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgPrefix: string = 'https://test-api.storexweb.com/';
  moviesContainer:any[] = [];

  constructor(private _MoviesService:MoviesService) {

    this._MoviesService.getMovies().subscribe((moviesData)=>{
      this.moviesContainer = moviesData.message;
      return this.moviesContainer;
    });

    
    
  }

  deleteMovie(e:any) {
    e.preventDefault();
    const movieId = this.moviesContainer.values;
    console.log(movieId);
  };

  

  ngOnInit(): void {
  }

}
