import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public tittle: String;
  public subtittle: String;
  public email: String;

  constructor() { 
    this.tittle = "Ana Navarro";
    this.subtittle = "Desarrollador Web";
    this.email = "A.navarrodo@gmail.com";
  }

  ngOnInit() {
  }

}
