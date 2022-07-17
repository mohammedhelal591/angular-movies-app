import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { MoviesService } from './../movies.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private _Router:Router , private _AuthService:AuthService , private _MoviesService:MoviesService , private _HttpClient:HttpClient) {}

  error:string = '';
  

  

  movieForm:FormGroup = new FormGroup({
    name:new FormControl(null, [Validators.required , Validators.minLength(3)]),
    description:new FormControl(null, [Validators.required , Validators.minLength(30)]),
    image:new FormControl('', Validators.required),
    category_id:new FormControl(null, Validators.required)
  });



  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.movieForm.patchValue({
        image: file
      });
    }
  } 

  

  createMovie(movieForm:FormGroup){
    this._MoviesService.createMovie(movieForm.value).subscribe((response)=>{
      const formData = new FormData();
      console.log(this.movieForm);
      formData.append('image', this.movieForm.get('image')?.value);
      console.log(this.movieForm);
      

      if(response.status === "success") {
        this._Router.navigate(['/movie-details']);
      } else {
        this.error = response.message;
        console.log(this.error);
      };
    })
  }

  ngOnInit(): void {
  }

}
