import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/Cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }


  listarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/v1/clientes');
  }

  crearCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/v1/cliente', cliente)
  }

  eliminarCliente(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`http://localhost:8080/api/v1/cliente/${id}`)
  }


}
