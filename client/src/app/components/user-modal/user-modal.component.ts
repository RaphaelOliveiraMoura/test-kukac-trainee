import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  @Input() data: Response;
  @Input() userImput: Request;

  constructor() { 
  }

  ngOnInit() {
  }

}
