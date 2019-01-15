import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nombre: string
  public followers: number
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre
      this.followers = +params.followers

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/ropa'])
      }
    })
  }

 redirigir(){
   this._router.navigate(['/cursos'])
 }

}
