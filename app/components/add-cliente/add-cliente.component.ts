import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  cliente: Cliente = {
    cod_cliente:0,
	  nom_cliente:'',
	  ape_cliente:'',
	  dni_cliente:'',
	  fec_nac_cliente: new Date()
  };

  ngOnInit(): void {
  }

  saveCliente() : void{
    console.log(">>>Save Inicio Impresion");
    console.log(this.cliente);
    console.log(">>>Save Fin Impresion");

    this.clienteService.create(this.cliente).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error=>{
        console.log(error);
      }
    )
  }

}
