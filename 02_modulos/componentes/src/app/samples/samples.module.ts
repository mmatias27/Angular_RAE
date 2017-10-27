import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { BindLocalComponent } from './bind-local/bind-local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BindingComponent,
    BindLocalComponent
  ],
  exports: [
    BindingComponent,
    BindLocalComponent
  ]
})
export class SamplesModule { }
