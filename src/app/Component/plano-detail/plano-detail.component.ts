import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlanoService } from '../../Services/plano.service';
import { Plano } from '../../model/Plano';
@Component({
  selector: 'app-plano-detail',
  templateUrl: './plano-detail.component.html',
  styleUrls: ['../../app.component.css']

})
export class PlanoDetailComponent implements OnInit {
  @Input() plano: Plano;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private PlanoService: PlanoService
    ) { }

  ngOnInit() {

    this.getPlano();
  }

  getPlano(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.PlanoService.getPlano(id)
      .subscribe(p => this.plano = p);

  }

  goBack(): void {
    this.location.back();
  }
}
