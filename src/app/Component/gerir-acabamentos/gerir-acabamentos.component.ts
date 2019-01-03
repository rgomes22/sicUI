import { Component, OnInit } from '@angular/core';
import { FinishService } from '../../Services/finish.service';
import { Finish } from '../../model/Finish';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gerir-acabamentos',
  templateUrl: './gerir-acabamentos.component.html',
  styleUrls: ['../../app.component.css']
})
export class GerirAcabamentosComponent implements OnInit {

  titulo="Gerir Acabamento";
  allAcabamentos : Finish[];
  listagem = 'Acabamentos Disponiveis';
  selectedAcabamento: Finish;
  constructor(
    private location: Location,
    private finishService: FinishService) { }

  ngOnInit() {
    this.getAcabamentos();
  }
 
  goBack(): void {
    this.location.back();
  } 

  getAcabamentos(): void{
    this.finishService.getAcabamentos().subscribe(data =>{
      console.log('Acabamentos'+data);
      this.allAcabamentos = data;
    });
  }

  onSelect(finish: Finish): void {
    this.selectedAcabamento = finish;
  }
  
  delete(finish:Finish): void {
    this.allAcabamentos = this.allAcabamentos.filter(h => h !== finish);
    this.finishService.delete(finish).subscribe();
  }

}
