import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.model';

const baseUrl = "http://localhost:8090/rest/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  create(data:any):Observable<any>{
    return this.http.post(baseUrl, data);
  }
}
