import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesContainer:any = []
  moviesData:any;

  constructor() {

    
  }

  ngOnInit(): void {
  }

}
