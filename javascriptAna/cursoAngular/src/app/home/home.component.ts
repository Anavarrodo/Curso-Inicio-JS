import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nombre: string;
  public followers: number;
  public identificador: boolean;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    
  ){
  }

  ngOnInit(){
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre;
      this.followers = +params.followers;
    })
  }

  redireccionar(){
    this._router.navigate(['/ropa'])
  }

  outIdentificar(){
    this.identificador = false;
  }

  identificar(){
    this.identificador = true;
  }
}
