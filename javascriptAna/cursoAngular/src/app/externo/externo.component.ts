import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [
    PeticionesService
  ]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public _user: ContactoUsuario;
  public new_user: any;
  public cargarUsuario: any;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userId = 1;
    this._user = new ContactoUsuario("","","","")
    this.new_user = {
              "name": "",
              "job": ""
          }
  }

  ngOnInit() {
    this.cargarUser()
  }

  cargarUser(){
    this.user = false
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  onSubmit(form){
    console.log(this._user)
  }

  onNewSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.cargarUsuario = response
        form.reset()
      },
      error => {
        console.log(<any>error)
      }
    )
  }

}
