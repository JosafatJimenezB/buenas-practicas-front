import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClientesComponentPage } from './pages/clientes.component';


@NgModule({
  declarations: [
    ClienteFormComponent,
    ClientesComponentPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ClientesComponentPage
  ]

})
export class ClientesModule { }
