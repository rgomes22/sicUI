import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/Services/error.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  public message: string;

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
    this.errorService.currentMessage.subscribe(message => this.message = message);
  }

}
