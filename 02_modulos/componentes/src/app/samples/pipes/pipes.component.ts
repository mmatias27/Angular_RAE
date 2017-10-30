import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  sNombre: string;
  nEdad: number;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Montse';
    this.nEdad = 20;
  }

}
