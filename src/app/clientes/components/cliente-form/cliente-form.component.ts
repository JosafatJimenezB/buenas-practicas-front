import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../../interfaces/Cliente';
import { ClienteService } from '../../services/services.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  form: NgForm = new NgForm([], []);
  cliente: Cliente = this.form.value;

  constructor(
    private clienteService: ClienteService
  ){}

  nuevoCliente(form: NgForm): void {
    this.clienteService.crearCliente(this.cliente).subscribe(
      (res:any) => {
        alert(res.mensaje)
        window.location.reload();
      }
    )
  }

}
