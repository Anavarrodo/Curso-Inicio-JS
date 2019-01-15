import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class PeticionesService {

    public url: string

    constructor(
        public _http: HttpClient
    ){
        this.url = 'https://reqres.in'
    }

    getPrueba(){
        return "Hola desde Servicios"
    }

    getUser(userId){
        return this._http.get(this.url + '/api/users/' + userId)
    }

    addUser(user){
        let json = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.post(this.url + '/api/users', json, {headers: headers})
    }

}