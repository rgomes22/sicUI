import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-encomenda-detail',
  templateUrl: './encomenda-detail.component.html',
  styleUrls: ['../app.component.css']
})
export class EncomendaDetailComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
