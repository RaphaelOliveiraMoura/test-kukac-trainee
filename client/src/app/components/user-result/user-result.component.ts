import { Component, OnInit, Input } from '@angular/core';

import { Response } from '../../models/Response';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {

  @Input() data: Response;
  @Input() userImput: Request;

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
