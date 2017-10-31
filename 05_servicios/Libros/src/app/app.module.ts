import { BookshttpService } from './services/bookshttp.service';
import { BooksService } from './services/books.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ComponentesModule } from './componentes/componentes.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentesModule,
    SharedModule
  ],
  providers: [
    BooksService,
    BookshttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
