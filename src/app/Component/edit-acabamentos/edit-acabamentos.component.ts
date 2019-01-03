import { Component, OnInit, Input } from '@angular/core';
import { Finish } from 'src/app/model/Finish';
import { FinishService } from 'src/app/Services/finish.service';
import { finishPutDTO } from 'src/app/DTOS/finishPutDTO';

@Component({
  selector: 'app-edit-acabamentos',
  templateUrl: './edit-acabamentos.component.html',
  styleUrls: ['./edit-acabamentos.component.css']
})
export class EditAcabamentosComponent implements OnInit {

  
  @Input() finish : Finish;
  constructor(private finishService: FinishService) { }

  ngOnInit() {
  }

  editarFinish(fin:Finish, name:string){
    if(!name){
      alert("Todos os parametros tem de estar preenchidos");
      return;
    }

    let finishId = fin.finishId;
    let finishName = name;
    this.finishService.putFinish(fin.finishId,
      {finishId,finishName} as finishPutDTO).subscribe(f => this.finish = f,()=>this.ngOnInit());
    return
  }

}
