import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  logoImg: string;

  constructor() { }

  ngOnInit() {
    this.logoImg = '../../../assets/rae-logo_2x.png';
  }

}
