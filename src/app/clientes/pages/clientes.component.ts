import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { ClienteService } from '../services/services.service';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes.component.html',
})

export class ClientesComponentPage implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.listarClientes();
   }


  listarClientes(): void {
    this.clienteService.listarClientes().subscribe(
      (response: any) => {
        this.clientes = response.object;
        console.log(response.object)
      }
    )
  }

  eliminarCliente(id: number): void {
    console.log(id)
    this.clienteService.eliminarCliente(id).subscribe(
      (response: any) => {
        alert(response);
      }
    )
  }

}
