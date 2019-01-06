import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/Services/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  public message: string;

  constructor(private errorService: ErrorService, public router: Router) { }

  ngOnInit() {
    if(this.message==="" || this.message === undefined){
      this.router.navigate([""]);
    }
    this.errorService.currentMessage.subscribe(message => this.message = message);
  }

}
