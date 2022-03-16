import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DetailsComponent } from './components/details/details.component';
import { ResearchComponent } from './components/research/research.component';
import { Page404NotFoundComponent } from './components/page404-not-found/page404-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MoviesComponent,
    LoginFormComponent,
    DetailsComponent,
    ResearchComponent,
    Page404NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
