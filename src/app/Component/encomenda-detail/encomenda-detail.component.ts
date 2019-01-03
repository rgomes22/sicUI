import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Item } from 'src/app/model/Item';
import {ItemService} from 'src/app/Services/item.service'
@Component({
  selector: 'app-encomenda-detail',
  templateUrl: './encomenda-detail.component.html',
  styleUrls: ['../../app.component.css']
})
export class EncomendaDetailComponent implements OnInit {

  allItens: Item[];
  items: Item[]=[];

    //dropdown variables
    disable = false;
    ShowFilter = false;
    limiteSelection = false;
    selectedItems: Item[] = [];
    dropdownSettings : any = {};
    dropdownList = [];
  constructor(private location : Location,
              private itemService : ItemService
    ) { }

  ngOnInit() {
    this.getItens();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  goBack(): void {
    this.location.back();
  }

  getItens(): void {
    this.itemService.getItens().subscribe(data =>{
      this.items = data;
    });
  }

  onItemSelect(item: Item){
    
  }
}