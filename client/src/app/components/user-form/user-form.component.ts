import { Component, OnInit } from '@angular/core';

import { RendaUserService } from '../../services/renda-user.service';
import { Request } from '../../models/Request';
import { Response } from '../../models/Response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  requestData: Request = {
    nome: '',
    cep: null,
    renda_mensal: null,
    numero_dependentes: null
  };

  responseData: Response = {
    nome: '',
    endereco: {
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: ''
    },
    per_capita: 0
  };

  isLoading: boolean = false;

  constructor( private rendaService: RendaUserService, private router: Router ) { 
    
  }

  ngOnInit() {
    
  }

  sendData() {
    console.log( this.requestData );
    this.isLoading = true;
    this.rendaService.sendData( this.requestData ).subscribe(
      response => {
        console.log(response);
        this.responseData = response;
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}
