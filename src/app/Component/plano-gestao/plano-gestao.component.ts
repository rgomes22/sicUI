import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlanoService } from '../../Services/plano.service';
import { Plano } from '../../model/Plano';
@Component({
  selector: 'app-plano-gestao',
  templateUrl: './plano-gestao.component.html',
  styleUrls: ['../../app.component.css']
})
export class PlanoGestaoComponent implements OnInit {
  allPlanos : Plano[];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private PlanoService: PlanoService
  ) { }

  ngOnInit() {
    this.getPlanos();
  }
  goBack(): void {
    this.location.back();
  }

  getPlanos(): void {
    this.PlanoService.getPlanos().subscribe(p => this.allPlanos = p);

  }

}
