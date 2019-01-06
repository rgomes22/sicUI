import { Component, OnInit,Input } from '@angular/core';
import { Location } from '@angular/common';
import { Item } from 'src/app/model/Item';
import {ItemService} from 'src/app/Services/item.service'
import { Encomenda } from 'src/app/model/Encomenda';
import { ActivatedRoute } from '@angular/router';
import { EncomendaService } from 'src/app/Services/encomenda.service';
import { addItemEncomendaDTO } from 'src/app/DTOS/addItemEncomendaDTO';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-encomenda-detail',
  templateUrl: './encomenda-detail.component.html',
  styleUrls: ['../../app.component.css']
})
export class EncomendaDetailComponent implements OnInit {

  @Input() encomenda: Encomenda;
  itemsAcrescentar: Item[]=[];
  itemsApagar:Item[];
  itemAcresentar: string;
  
  constructor(private location : Location,
              private itemService : ItemService,
              private route: ActivatedRoute,
              private encomendaService: EncomendaService,
              private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.getEncomenda();
    this.getItensAcrescentar();
  }
  goBack(): void {
    this.location.back();
  }
  getEncomenda(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.encomendaService.getEncomenda(id)
      .subscribe(encomenda => {this.encomenda = encomenda;  this.itemsApagar = this.encomenda.itens;});

  }

  getItensAcrescentar(): void {
    this.itemService.getItens().subscribe(data =>{
      this.itemsAcrescentar = data;
    });
    
  }

  onItemSelect(item: Item){
  }

  addItemToOrder():void{
      let idItem = this.itemAcresentar;
      this.encomendaService.addItem( this.encomenda.id, {idItem} as addItemEncomendaDTO).subscribe(i => {this.encomenda = i;this.toastr.success("Adicionado com sucesso"); this.ngOnInit();});
      return
  }

  removeItemToOrder( item : Item):void{
    let idItem = item.id;
    this.encomendaService.removeItem( this.encomenda.id, {idItem} as addItemEncomendaDTO).subscribe(i => {this.encomenda = i;this.toastr.success("Eliniado com sucesso");this.ngOnInit();});
    return
}


  acrescentarItem(value: string): void {
    this.itemAcresentar = value;
    console.log(value);
  }

}