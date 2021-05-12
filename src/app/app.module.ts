import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from 'components/movie-list.component';
import { MovieServiceService } from './services/movie-service.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MovieListComponent],
  bootstrap: [AppComponent],
  providers: [MovieServiceService]
})
export class AppModule {}
