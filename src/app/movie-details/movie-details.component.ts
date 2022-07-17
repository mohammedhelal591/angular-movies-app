import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id:any;
  movieData:any;
  imgPrefix: string = 'https://test-api.storexweb.com/';

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) {
    this.id = _ActivatedRoute.snapshot.params['id'];
    console.log(this.id);


    this._MoviesService.getMovieDetails(this.id).subscribe((data)=>{
      this.movieData = data.message;
      console.log(this.movieData);
    })
  }

  ngOnInit(): void {
  }

}
