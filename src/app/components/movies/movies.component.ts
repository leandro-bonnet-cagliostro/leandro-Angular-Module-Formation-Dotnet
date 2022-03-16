import { Component, Input, OnInit } from '@angular/core';
import { Movie, DataMoviesService } from 'src/app/services/data-movies.service';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { ResearchEntityService } from 'src/app/services/research-entity.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  //@Input('research') textResearch!: string;
  movies !: Movie[];
  listResearch !: Movie[];
  changementPage!:string;
  // myObservable !:any;

  constructor(private movieService: DataMoviesService, private router: Router, public currentUser: CurrentUserService, public researchEntityService: ResearchEntityService) { 
    // this.researchEntityService.getObservable().subscribe(()=> console.log("La valeur de mon observable a changé !"));
    this.researchEntityService.getObservable().subscribe(val => 
      {
        // console.log("La valeur de mon observable a changé ! "+val);
        this.changementPage = val as string;
        this.movieService.get().subscribe(movies => {
          this.listResearch = movies.filter((movie) => {
            if(movie.title.includes(this.changementPage)) {
              console.log(movie);
              return movie;
            }
            return null;
          });
          console.log("Avant la réinitialisation : "+this.movies);
          this.movies = [];
          console.log("Après la réinitialisation : "+this.movies);
          this.movies = this.listResearch;
          console.log("Après l'affectation : "+this.movies);
          // this.loadMovies();
          console.log("Après le chargement : "+this.movies);
          // console.log("Liste de films : "+this.movies[0].title);
        });
      }  
    );
  }

  ngOnInit(): void {
    this.loadMovies();
    // this.researchEntityService.getElement();
    // this.myObservable = of(this.researchEntityService);
    // this.researchEntityService.getObservable().subscribe( (test) => console.log("Voici les changements : "+test.research))
    // this.researchEntityService.getObservable().subscribe(()=> console.log("La valeur de mon observable a changé !"));
  }

  loadMovies() {
    this.movieService.get().subscribe(movies => {
      console.log(movies);
      this.movies = movies;
      // console.log("Recuperation de la chaine de recherche : "+this.researchEntityService.getResearch());
      //console.log("La récup du service : "+this.researchEntityService.getResearch());
      // if(this.researchEntityService.getResearch().length===0) {
      //   this.movies = movies;
      // } else {
      //   console.log(this.researchEntityService.getResearch());
      // }
    });
  }

  deleteMovie(id: number | undefined) {
    if(id && this.currentUser?.user?.role === "admin") {
      this.movieService.delete(id).subscribe(_movie => {
        console.log("C'est supprimé !");
        this.loadMovies();
      });
    }
  }

  updateMovie(movie: Movie | undefined) {
    if (movie) {
      // console.log(this.router.url);
      // const navigationDetails: string[] = ['movie','details',`${1}`];
      // const navigationDetails: string[] = ['details',`movie`,`${1}`];
      // const navigationDetails: string[] = ['details',`movie`,`${1}`];
      // const navigationDetails: string[] = ['details',`movie?id=${1}`];
      // const navigationDetails: string[] = ['details',`?movie=${1}`];
      
      // const navigationDetails: string[] = ['details',`movie`];
      const navigationDetails: string[] = ['details'];
      this.router.navigate(navigationDetails,{queryParams: 
        { 
          type : 'movie',
          id : `${movie.id}`
        }
      });
      
      // this.movieService.update(movie).subscribe(_movie => {
      //   console.log("C'est modifié !");
      // });

    }
  }

}
