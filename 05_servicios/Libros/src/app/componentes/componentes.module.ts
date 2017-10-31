import { HttpServiceComponent } from './http-service/http-service.component';
// import { BooksService } from './../books.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { GoogleApiComponent } from './google-api/google-api.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PadreComponent,
    GoogleApiComponent,
    HttpServiceComponent
  ],
  exports: [
    PadreComponent,
    GoogleApiComponent,
    HttpServiceComponent
  ]
})
export class ComponentesModule { }
