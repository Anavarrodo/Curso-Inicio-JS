import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public identificado: boolean
  constructor() { 
    this.identificado = false;
  }

  ngOnInit() {
  }

  login(){
   this.identificado = true
  }
  out(){
    this.identificado = false
  }
}
