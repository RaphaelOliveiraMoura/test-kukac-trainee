import { Component, OnInit } from '@angular/core';

import { Response } from '../../models/Response';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {

  data: Response = {
    nome: '',
    endereco: {
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: ''
    },
    per_capta: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
