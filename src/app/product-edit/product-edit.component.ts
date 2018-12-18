import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() product : Produto;
  
  constructor() { }


  ngOnInit() {  
  }

}
