import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  autor: string;
  lugar: string;

  constructor() { }

  ngOnInit() {
    this.autor = 'Aleajndro Cerezo';
    this.lugar = 'Madrid';
  }

}
